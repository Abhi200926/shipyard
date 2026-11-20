// next/image does not add basePath to the src of an unoptimized image, so
// files from /public must be prefixed by hand (empty string when no basePath).
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
