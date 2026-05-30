export function slugify(input: string): string {
  return String(input)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

// Post slug: frontmatter `slug` with spaces -> dashes (matches legacy gatsby-node.js).
export function postSlug(frontmatterSlug: string): string {
  return String(frontmatterSlug).replace(/ /g, '-');
}
