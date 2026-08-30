import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';
import Papa from 'papaparse';
import { parse as parseYaml } from 'yaml';

const projectRoot = process.cwd();
const errors = [];
const warnings = [];
const counts = {
  announcements: 0,
  courses: 0,
  publications: 0,
  shortCourses: 0,
  tutorials: 0,
};

const publicationTypes = new Set([
  'book',
  'chapter',
  'encyclopedia',
  'journal',
  'manuscript',
  'proceedings',
]);
const publicationTags = new Set([
  'Game Theory',
  'Logic',
  'Social Choice Theory',
]);
const announcementTypes = new Set(['conference', 'course', 'general', 'talk', 'workshop']);
const tutorialIcons = new Set(['link', 'pdf', 'youtube']);

function displayPath(filePath) {
  return path.relative(projectRoot, filePath);
}

function addError(filePath, message) {
  errors.push(`${displayPath(filePath)}: ${message}`);
}

function addWarning(filePath, message) {
  warnings.push(`${displayPath(filePath)}: ${message}`);
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isHttpUrl(value) {
  if (!hasText(value)) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function dateOnlyTimestamp(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;

  const [year, month, day] = value.split('-').map(Number);
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);

  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
    ? timestamp
    : null;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(directory, predicate = () => true) {
  const matches = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      matches.push(...await walk(entryPath, predicate));
    } else if (predicate(entryPath, entry)) {
      matches.push(entryPath);
    }
  }
  return matches.sort();
}

async function readFrontmatter(filePath, { strictYaml = false } = {}) {
  try {
    const source = await fs.readFile(filePath, 'utf8');
    if (!strictYaml) return matter(source).data;

    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!frontmatter) throw new Error('missing --- frontmatter delimiters');
    return parseYaml(frontmatter[1]);
  } catch (error) {
    addError(filePath, `cannot parse frontmatter (${error.message})`);
    return null;
  }
}

function validateLinkEntries(filePath, fieldName, entries, linkKey) {
  if (entries == null) return;
  if (!Array.isArray(entries)) {
    addError(filePath, `${fieldName} must be a YAML list`);
    return;
  }

  for (const [index, entry] of entries.entries()) {
    if (!entry || typeof entry !== 'object') {
      addError(filePath, `${fieldName}[${index}] must be an object`);
      continue;
    }
    if (!hasText(entry.sem)) {
      addWarning(filePath, `${fieldName}[${index}] has no semester label`);
    }
    if (entry[linkKey] && !isHttpUrl(entry[linkKey])) {
      addError(filePath, `${fieldName}[${index}].${linkKey} is not a valid http(s) URL`);
    }
  }
}

async function validateCourses() {
  const coursesDirectory = path.join(projectRoot, 'data', 'courses');
  const files = await walk(coursesDirectory, filePath => filePath.endsWith('.md'));

  counts.courses = files.length;

  for (const filePath of files) {
    const data = await readFrontmatter(filePath);
    if (!data) continue;

    if (!hasText(data.title)) addError(filePath, 'title is required');
    if (!hasText(data.level)) {
      addError(filePath, 'level is required');
    } else if (!data.level.includes('Undergraduate') && !data.level.includes('Graduate')) {
      addError(filePath, 'level must contain Undergraduate or Graduate');
    }

    if (hasText(data.current_semester) && !/^(Spring|Summer|Fall|Winter) \d{4}$/.test(data.current_semester)) {
      addWarning(filePath, `current_semester "${data.current_semester}" does not use the expected "Fall 2026" format`);
    }

    validateLinkEntries(filePath, 'website', data.website, 'www');
    validateLinkEntries(filePath, 'past_semesters', data.past_semesters, 'www');

    if (data.syllabus != null && !Array.isArray(data.syllabus)) {
      addError(filePath, 'syllabus must be a YAML list');
    } else {
      for (const [index, syllabus] of (data.syllabus || []).entries()) {
        if (!syllabus || typeof syllabus !== 'object') {
          addError(filePath, `syllabus[${index}] must be an object`);
          continue;
        }
        if (!hasText(syllabus.file)) {
          continue;
        }
        const relativeFile = syllabus.file.replace(/^\.\//, '');
        if (relativeFile.includes('..') || path.isAbsolute(relativeFile)) {
          addError(filePath, `syllabus[${index}].file must stay inside data/courses`);
        } else if (!await fileExists(path.join(coursesDirectory, relativeFile))) {
          addError(filePath, `syllabus file not found: ${relativeFile}`);
        }
      }
    }

  }
}

async function validatePublications() {
  const publicationsDirectory = path.join(projectRoot, 'data', 'pubs');
  const files = await walk(publicationsDirectory, filePath => filePath.endsWith('.md'));
  const titles = new Map();

  counts.publications = files.length;

  for (const filePath of files) {
    // Pages CMS uses a strict YAML parser, so validate publications the same way.
    const data = await readFrontmatter(filePath, { strictYaml: true });
    if (!data) continue;

    if (!hasText(data.title)) addError(filePath, 'title is required');
    if (!hasText(data.authors)) addError(filePath, 'authors is required');
    if (!Number.isInteger(data.year)) addError(filePath, 'year must be a number, not a quoted string');
    if (!publicationTypes.has(data.type)) {
      addError(filePath, `type must be one of: ${[...publicationTypes].join(', ')}`);
    }

    if (data.tags != null && !Array.isArray(data.tags)) {
      addError(filePath, 'tags must be a YAML list');
    } else {
      for (const tag of data.tags || []) {
        if (!publicationTags.has(tag)) {
          addWarning(filePath, `unrecognized publication tag "${tag}"; it will not match a topic filter`);
        }
      }
    }

    let localPdf = null;
    if (data.file === true) {
      localPdf = path.join(path.dirname(filePath), `${path.basename(filePath, '.md')}.pdf`);
    } else if (hasText(data.file) && !isHttpUrl(data.file)) {
      if (data.file.startsWith('/api/files/pubs/')) {
        localPdf = path.join(
          publicationsDirectory,
          data.file.slice('/api/files/pubs/'.length),
        );
      } else {
        localPdf = path.join(path.dirname(filePath), data.file);
      }
    } else if (data.file && typeof data.file === 'object' && hasText(data.file.name)) {
      localPdf = path.join(path.dirname(filePath), data.file.name);
    }
    if (localPdf) {
      const resolvedPdf = path.resolve(localPdf);
      const relativePdf = path.relative(publicationsDirectory, resolvedPdf);
      if (relativePdf === '..' || relativePdf.startsWith(`..${path.sep}`) || path.isAbsolute(relativePdf)) {
        addError(filePath, 'file must stay inside data/pubs');
      } else if (!await fileExists(resolvedPdf)) {
        addError(filePath, `publication PDF not found: ${data.file}`);
      }
    }

    for (const key of ['publisherlink', 'preprintlink', 'code', 'website']) {
      if (data[key] && !isHttpUrl(data[key])) addError(filePath, `${key} is not a valid http(s) URL`);
    }

    if (data.front_page === true && !Array.isArray(data.frontpage_data)) {
      addError(filePath, 'front_page publications need a frontpage_data YAML list');
    }

    if (hasText(data.title)) {
      const existing = titles.get(data.title);
      if (existing) addWarning(filePath, `duplicate publication title; also used by ${displayPath(existing)}`);
      else titles.set(data.title, filePath);
    }
  }
}

async function validateAnnouncements() {
  const filePath = path.join(projectRoot, 'data', 'announcements.yaml');
  let announcements;
  try {
    announcements = parseYaml(await fs.readFile(filePath, 'utf8'));
  } catch (error) {
    addError(filePath, `cannot parse YAML (${error.message})`);
    return;
  }

  if (!Array.isArray(announcements)) {
    addError(filePath, 'top-level value must be a YAML list');
    return;
  }
  counts.announcements = announcements.length;

  for (const [index, item] of announcements.entries()) {
    const label = `announcement ${index + 1}`;
    if (!item || typeof item !== 'object') {
      addError(filePath, `${label} must be an object`);
      continue;
    }
    if (!hasText(item.text)) addError(filePath, `${label}.text is required`);
    if (item.type != null && !announcementTypes.has(item.type)) {
      addError(filePath, `${label}.type must be one of: ${[...announcementTypes].join(', ')}`);
    }

    const dates = {};
    for (const field of ['posted', 'new_until']) {
      if (item[field] == null) continue;
      dates[field] = dateOnlyTimestamp(item[field]);
      if (dates[field] === null) addError(filePath, `${label}.${field} must be a real date in YYYY-MM-DD format`);
    }

    if (item.new_until != null && item.posted == null) {
      addError(filePath, `${label}.new_until requires posted`);
    } else if (dates.posted != null && dates.new_until != null && dates.new_until < dates.posted) {
      addError(filePath, `${label}.new_until cannot be earlier than posted`);
    }

    if (typeof item.show !== 'boolean') addError(filePath, `${label}.show must be true or false`);
  }
}

async function validateTutorials() {
  const filePath = path.join(projectRoot, 'data', 'tutorials.yaml');
  let tutorials;
  try {
    tutorials = parseYaml(await fs.readFile(filePath, 'utf8'));
  } catch (error) {
    addError(filePath, `cannot parse YAML (${error.message})`);
    return;
  }

  if (!Array.isArray(tutorials)) {
    addError(filePath, 'top-level value must be a YAML list');
    return;
  }
  counts.tutorials = tutorials.length;

  for (const [index, tutorial] of tutorials.entries()) {
    const label = `tutorial ${index + 1}`;
    if (!hasText(tutorial?.text)) addError(filePath, `${label} needs text`);
    if (!isHttpUrl(tutorial?.link)) addError(filePath, `${label}.link is not a valid http(s) URL`);
    if (!tutorialIcons.has(tutorial?.icon)) {
      addError(filePath, `${label}.icon must be one of: ${[...tutorialIcons].join(', ')}`);
    }
  }
}

async function validatePastCourses() {
  const filePath = path.join(projectRoot, 'data', 'past_courses.csv');
  const csv = await fs.readFile(filePath, 'utf8');
  const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });

  for (const error of parsed.errors) {
    addError(filePath, `CSV row ${error.row + 2}: ${error.message}`);
  }

  const requiredHeaders = ['name', 'description', 'semester', 'school', 'website'];
  for (const header of requiredHeaders) {
    if (!parsed.meta.fields?.includes(header)) addError(filePath, `missing CSV column: ${header}`);
  }
  for (const [index, course] of parsed.data.entries()) {
    if (!hasText(course.school)) addWarning(filePath, `row ${index + 2} has no school`);
    if (course.website && !isHttpUrl(course.website)) addError(filePath, `row ${index + 2} has an invalid website URL`);
  }
}

async function validateShortCourses() {
  const roots = [path.join(projectRoot, 'data', 'esslli'), path.join(projectRoot, 'data', 'nasslli')];
  const indexFiles = [];
  for (const root of roots) {
    indexFiles.push(...await walk(root, filePath => path.basename(filePath) === 'index.md'));
  }
  counts.shortCourses = indexFiles.length;

  for (const indexPath of indexFiles) {
    const data = await readFrontmatter(indexPath);
    if (!data) continue;
    if (!hasText(data.title)) addError(indexPath, 'title is required');
    if (!hasText(data.school)) addError(indexPath, 'school is required');
    if (!hasText(data.dates)) addWarning(indexPath, 'dates is empty');
    if (!hasText(data.venue)) addWarning(indexPath, 'venue is empty');
    if (data.school_www && !isHttpUrl(data.school_www)) {
      if (/^[a-z0-9.-]+\.[a-z]{2,}(?:\/.*)?$/i.test(data.school_www)) {
        addWarning(indexPath, 'school_www works, but a full https:// URL is clearer');
      } else {
        addError(indexPath, 'school_www is not a valid website address');
      }
    }

    const directory = path.dirname(indexPath);
    for (let day = 1; day <= 5; day += 1) {
      const dayPath = path.join(directory, `day${day}.md`);
      if (!await fileExists(dayPath)) {
        addWarning(indexPath, `day${day}.md is missing`);
        continue;
      }
      const dayData = await readFrontmatter(dayPath);
      if (!dayData) continue;
      if (dayData.file) {
        if (!hasText(dayData.file) || dayData.file.includes('..') || path.isAbsolute(dayData.file)) {
          addError(dayPath, 'file must be a filename inside this course directory');
        } else if (!await fileExists(path.join(directory, dayData.file))) {
          addError(dayPath, `slide file not found: ${dayData.file}`);
        }
      }
    }
  }
}

async function validatePagesCms() {
  const configPath = path.join(projectRoot, '.pages.yml');
  let config;
  try {
    config = parseYaml(await fs.readFile(configPath, 'utf8'));
  } catch (error) {
    addError(configPath, `cannot parse Pages CMS configuration (${error.message})`);
    return;
  }

  const publicationConfig = config?.content?.find(entry => entry?.name === 'publications');
  if (!publicationConfig) {
    addError(configPath, 'a publications content collection is required');
    return;
  }
  if (publicationConfig.path !== 'data/pubs' || publicationConfig.subfolders !== false) {
    addError(configPath, 'the publications collection must use the flat data/pubs directory');
  }

  const configuredFields = new Set((publicationConfig.fields || []).map(field => field?.name));
  const publicationFiles = await walk(
    path.join(projectRoot, 'data', 'pubs'),
    filePath => filePath.endsWith('.md'),
  );
  const contentFields = new Set();
  for (const publicationPath of publicationFiles) {
    try {
      const data = matter(await fs.readFile(publicationPath, 'utf8')).data;
      for (const field of Object.keys(data)) contentFields.add(field);
    } catch {
      // Publication parsing errors are reported by validatePublications().
    }
  }
  for (const field of [...contentFields].sort()) {
    if (!configuredFields.has(field)) {
      addError(configPath, `publication field "${field}" is missing from the CMS form`);
    }
  }

  const fileField = (publicationConfig.fields || []).find(field => field?.name === 'file');
  if (fileField?.type !== 'file' || fileField?.options?.media !== 'publication_pdfs') {
    addError(configPath, 'the publication file field must use the publication_pdfs media source');
  }
  const pdfMedia = config?.media?.find(entry => entry?.name === 'publication_pdfs');
  if (pdfMedia?.input !== 'data/pubs' || pdfMedia?.output !== '/api/files/pubs') {
    addError(configPath, 'publication_pdfs must map data/pubs to /api/files/pubs');
  }
}

await Promise.all([
  validateAnnouncements(),
  validateCourses(),
  validatePagesCms(),
  validatePastCourses(),
  validatePublications(),
  validateShortCourses(),
  validateTutorials(),
]);

if (warnings.length > 0) {
  console.warn(`\nWarnings (${warnings.length})`);
  for (const warning of warnings.sort()) console.warn(`  - ${warning}`);
}

if (errors.length > 0) {
  console.error(`\nErrors (${errors.length})`);
  for (const error of errors.sort()) console.error(`  - ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nContent validation passed.');
}

console.log(
  `Checked ${counts.courses} courses, ${counts.publications} publications, ` +
  `${counts.announcements} announcements, ${counts.tutorials} tutorials, and ` +
  `${counts.shortCourses} short courses.`,
);
