# Eric Pacuit's academic website

Source for [pacuit.org](https://pacuit.org), built with Astro and deployed automatically by Netlify from the `main` branch.

Most routine updates do not require changing Astro code. Courses and publications are Markdown files, announcements and tutorials are YAML files, and the archive of earlier courses is a CSV file.

## Quick start

Requirements:

- Node.js 22.12 or newer
- npm
- Git

Install the exact dependency versions recorded in `package-lock.json`:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Astro prints the local URL, normally <http://localhost:4321>. Keep that terminal open while editing; the browser refreshes when a file changes. Stop the server with `Ctrl+C`.

If Astro was started as a managed background process, stop it with:

```bash
npm run astro -- dev stop
```

Before publishing, validate the content and create a production build:

```bash
npm run check
```

## The usual update workflow

1. Run `git status` and make sure you understand any existing changes.
2. Run `npm run dev` and open the local URL.
3. Edit the relevant file under `data/`, `public/`, or `src/`.
4. Run `npm run validate` for a quick content check.
5. Review the site locally.
6. Run `npm run check` for the final validation and production build.
7. Review `git diff` and `git status`.
8. Commit and push to `main`. Netlify deploys the pushed commit automatically.

Example publishing commands:

```bash
git add -p
git add path/to/any-intended-new-file
git status
git commit -m "Update website content"
git push origin main
```

Add only files that belong in the update. In particular, check untracked files before using `git add -A`.

## Pages CMS publication editor

[Pages CMS](https://app.pagescms.org) provides a private, form-based editor for the publication files. Its configuration is `.pages.yml`; it does not add an admin page or any CMS code to the public website.

After `.pages.yml` has been committed and pushed to GitHub:

1. Open [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Install the Pages CMS GitHub App with access limited to this website repository.
3. Select the repository, the `main` branch, and then **Publications**.
4. Search or sort the publication list, open an entry, edit its fields, and save.
5. Pages CMS commits the Markdown change to GitHub. Netlify then rebuilds the site.

The **Publication PDF** field can select an existing PDF or upload a new one. PDFs are stored below `data/pubs/` and served through `/api/files/pubs/`. Uploads are limited to `.pdf` files and their filenames are made URL-safe.

Direct editing remains fully supported. Before editing locally after using Pages CMS, run `git pull`. After a direct edit is pushed, Pages CMS reads the new GitHub version. Avoid editing the same publication in Pages CMS and locally at the same time, since that can create an ordinary Git conflict.

Pages CMS is configured with content merging enabled so an additional frontmatter field added by hand is preserved. The local validator also reports any publication field that has not yet been added to the CMS form.

## Where things live

| What you want to update | File or directory |
| --- | --- |
| Announcements on the home page | `data/announcements.yaml` |
| Recent publications on the home page | Publication Markdown files in `data/pubs/` |
| Full publications list | `data/pubs/**/*.md` |
| UMD courses | `data/courses/*.md` |
| Course syllabi | `data/courses/*.pdf` |
| Earlier courses at other institutions | `data/past_courses.csv` |
| ESSLLI/NASSLLI short courses and slides | `data/esslli/` and `data/nasslli/` |
| Tutorial links | `data/tutorials.yaml` |
| Profile, research interests, featured projects, and bio | `src/pages/index.astro` |
| Software page | `src/pages/software.astro` |
| Navigation and shared page layout | `src/layouts/Layout.astro` |
| Images used by the site | `public/images/` |
| Site-wide styles | `src/styles/global.css` |

## Announcements

Edit `data/announcements.yaml`. Add new announcements near the top of the file so the visible list stays in the order you want:

```yaml
- text: 'Talk at [Conference Name](https://example.org), October 12, 2026'
  type: talk
  posted: "2026-09-01"
  show: true
```

- `text` is required and is displayed exactly as written. Markdown-style links are supported.
- `posted` displays the **NEW** badge for 30 days. The badge disappears automatically.
- `type` is optional and defaults to `general`. Supported types are `talk`, `course`, `conference`, `workshop`, and `general`.
- `show: true` displays the announcement. Change it to `show: false` whenever you decide that the announcement is stale.
- `new_until` can override the normal 30-day **NEW** period when needed.

Hidden announcements stay in the YAML file but do not appear anywhere on the public website. There is no public announcement archive. Aim for roughly the same number of visible announcements as recent publications—currently about ten.

The type can be omitted whenever no category fits:

```yaml
- text: 'A general piece of news'
  posted: "2027-01-01"
  show: true
```

Use quotes around announcement text, especially when it contains punctuation such as colons.

## Courses

Each UMD course is a Markdown file in `data/courses/`. The filename becomes the page URL. For example, `programming-for-ai-1.md` becomes `/courses/programming-for-ai-1`.

Start by copying a similar course file and use this structure:

```markdown
---
title: Programming for AI 1
short_name: Programming for AI 1
course_number: PHIL 121
level: Undergraduate
current_semester: Fall 2026
website:
  - sem: Fall 2026
    www: https://example.org/course
syllabus:
  - sem: Fall 2026
    file: syl-hcai121-programming-ai-1.pdf
comment: This is the first course in the technical core sequence.
past_semesters:
  - sem: Fall 2025
    www: https://example.org/older-course
---

Write the course description here using Markdown.
```

Important details:

- `level` must contain exactly `Undergraduate` or `Graduate` so the course appears in the correct list.
- Use semester names such as `Fall 2026` or `Spring 2027`.
- Put the current website and syllabus first; the course cards use the first entry.
- Put syllabus PDFs directly in `data/courses/` and use only the filename in `file`.
- Leave `file` blank, or omit the `syllabus` section, when no syllabus is available.
- The Teaching page determines the current academic-year sections from today's date and displays courses whose `current_semester` matches those sections.
- Older institutions and courses that do not need their own description page belong in `data/past_courses.csv`.

## Publications

Each publication is one Markdown file somewhere below `data/pubs/`. Subdirectories such as `journal/`, `chapter/`, and `proceedings/` are useful for organization, but the `type` field determines where the publication appears.

Minimal example:

```markdown
---
title: "Title of the Paper"
authors: Coauthor One and Eric Pacuit
year: 2026
type: journal
journal: Journal Name
citation: "Journal Name, 12, pp. 1-20"
volume: 12
number: 1
pages: 1-20
file: /api/files/pubs/paper-file.pdf
publisherlink: https://doi.org/...
preprintlink: https://arxiv.org/...
code:
website:
additionaldata:
tags:
  - Logic
front_page: false
frontpage_data:
abstract: "The abstract goes here."
---
```

Allowed `type` values are:

- `book`
- `manuscript`
- `journal`
- `encyclopedia`
- `proceedings`
- `chapter`

The topic-filter tags currently recognized by the Publications page are exactly:

- `Logic`
- `Game Theory`
- `Social Choice Theory`

For a local PDF, use its download path under `/api/files/pubs/`, such as `/api/files/pubs/journal/paper-file.pdf`. The corresponding file lives under `data/pubs/`. Pages CMS writes this value automatically when a PDF is selected or uploaded. Leave `file` blank when no local PDF is available. Full `https://` URLs and the older relative-filename format remain supported when editing directly.

To feature a publication on the home page:

```yaml
front_page: true
frontpage_data:
  - icon: link
    short_blurb: "(with Coauthor One), Journal Name, 2026"
    use_publisher_link: true
    use_preprint_link: false
```

The validator checks required metadata, local PDF filenames, publication types, and topic tags.

## Short courses and slides

Short courses use this directory structure:

```text
data/esslli/2026/course-slug/
├── index.md
├── day1.md
├── day2.md
├── day3.md
├── day4.md
├── day5.md
└── lecture-files.pdf
```

For NASSLLI, use `data/nasslli/` instead. The corresponding URL is generated automatically, for example:

```text
data/esslli/2026/course-slug/  ->  /esslli2026/course-slug
```

`index.md` contains the course-level information:

```yaml
---
title: "Course Title"
venue: City, Country
dates: August 3-7, 2026
time: 11:00-12:30
location: Room 101
school: ESSLLI 2026
school_www: https://example.org
---
```

Each `dayN.md` contains lecture information and optional Markdown notes:

```yaml
---
lecture: 1
title: "Lecture title"
file: lecture-1.pdf
date: August 3, 2026
---
```

Slide filenames are relative to that short-course directory. `npm run validate` reports missing day files and missing slide files.

## Tutorials and older courses

Tutorial links live in `data/tutorials.yaml`:

```yaml
- text: "Online notes on logic and probability"
  link: https://logic-probability.pacuit.org
  icon: link
```

The allowed icons are `link`, `pdf`, and `youtube`.

The earlier-course archive is `data/past_courses.csv`. Preserve its header row and quote fields containing commas.

## Validation commands

```bash
npm run validate  # Check content metadata and local file references
npm run build     # Create the Netlify production build
npm run check     # Run both commands
```

Validation errors stop `npm run check`. Warnings highlight likely maintenance issues—such as incomplete optional metadata or topic tags that do not match a filter—but do not stop the build.

## Updating Astro and dependencies

For routine development, use `npm ci`; it installs the versions already recorded in the lockfile.

When intentionally upgrading Astro and its official integrations:

```bash
npx @astrojs/upgrade
npm run check
```

Review major-version migration notes before publishing. Do not run `npm audit fix --force` without reviewing the proposed package downgrades or major upgrades.

## Deployment

Netlify watches the GitHub repository's `main` branch. A successful push to `main` starts a production deployment automatically; do not upload `dist/` manually.

After pushing:

1. Check the Netlify deploy log for a successful build.
2. Open [pacuit.org](https://pacuit.org) and verify the changed page.
3. If something is wrong, fix it in the repository and push another commit so the source and deployed site remain synchronized.

## Troubleshooting

### `npm run dev` hangs before printing a URL

This project is inside Dropbox. Dropbox may offload files in `node_modules`, leaving placeholders that cause Node.js to wait indefinitely. `node_modules` is disposable and is not committed to Git.

Move the stale directory out of the project and reinstall:

```bash
mv node_modules /tmp/mysite-node_modules-old
npm ci
```

### Port 4321 is already in use

Astro chooses another port and prints it in the terminal. Use the URL Astro prints, or stop the earlier server:

```bash
npm run astro -- dev stop
```

### A course or publication PDF link returns 404

Run `npm run validate`. Confirm that the metadata contains only the filename and that the PDF is in the same content directory described above.

## Files that should not be committed

These are generated or machine-specific and are already covered by `.gitignore`:

- `node_modules/`
- `dist/`
- `.astro/`
- `.netlify/`
- `.env*`
- `.DS_Store`
