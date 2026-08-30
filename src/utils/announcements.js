import announcementsYaml from '../../data/announcements.yaml?raw';
import { parse } from 'yaml';

export const announcementTypes = new Set(['conference', 'course', 'general', 'talk', 'workshop']);
export const newAnnouncementDays = 30;

const millisecondsPerDay = 24 * 60 * 60 * 1000;

function dateOnlyTimestamp(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;

  const [year, month, day] = value.split('-').map(Number);
  const timestamp = Date.UTC(year, month - 1, day);
  const date = new Date(timestamp);

  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
    ? timestamp
    : null;
}

function todayTimestamp(now) {
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
}

export function loadAnnouncements() {
  const data = parse(announcementsYaml);
  if (!Array.isArray(data)) throw new Error('data/announcements.yaml must contain a YAML list');

  return data.map((item, index) => ({
    ...item,
    type: announcementTypes.has(item.type) ? item.type : 'general',
    _index: index,
  }));
}

export function isNewAnnouncement(item, now = new Date()) {
  const posted = dateOnlyTimestamp(item.posted);
  if (posted === null) return false;

  const today = todayTimestamp(now);
  if (today < posted) return false;

  const customEnd = dateOnlyTimestamp(item.new_until);
  if (customEnd !== null) return today <= customEnd;

  return today - posted < newAnnouncementDays * millisecondsPerDay;
}

export function getVisibleAnnouncements(items) {
  return items.filter(item => item.show !== false);
}

export function renderAnnouncementText(text) {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>',
  );
}
