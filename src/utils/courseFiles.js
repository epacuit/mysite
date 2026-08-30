export function getCourseFileUrl(file) {
  if (typeof file !== 'string' || file.trim() === '') return null;

  const value = file.trim();
  if (/^https?:\/\//.test(value) || value.startsWith('/api/files/courses/')) return value;

  return `/api/files/courses/${value.replace(/^\.\//, '').replace(/^\//, '')}`;
}
