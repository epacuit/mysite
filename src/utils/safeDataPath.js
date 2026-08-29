import path from 'node:path';

export const dataRoot = path.resolve(process.cwd(), 'data');

export function parseCatchAllPath(value) {
  const rawParts = Array.isArray(value)
    ? value
    : typeof value === 'string'
      ? value.split('/')
      : [];

  if (rawParts.length === 0) return null;

  try {
    const parts = rawParts.map(part => decodeURIComponent(part));
    return parts.every(part => part.length > 0 && !part.includes('\0')) ? parts : null;
  } catch {
    return null;
  }
}

export function resolveInside(baseDirectory, ...parts) {
  if (parts.length === 0 || parts.some(part => typeof part !== 'string' || part.includes('\0'))) {
    return null;
  }

  const base = path.resolve(baseDirectory);
  const candidate = path.resolve(base, ...parts);
  const relative = path.relative(base, candidate);

  if (
    relative === '' ||
    relative === '..' ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  ) {
    return null;
  }

  return candidate;
}

export function isPlainFilename(value) {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    value !== '.' &&
    value !== '..' &&
    !/[\\/\0]/.test(value)
  );
}
