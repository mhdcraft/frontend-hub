function generateSlug(title) {
  return String(title)
    .toLocaleLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s-]+/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function makeUniqueSlug(title, boards = [], excludeId = null) {
  let slug = generateSlug(title);
  let counter = 1;

  while (
    boards.some((board) => board.slug === slug && board.id !== excludeId)
  ) {
    slug += `-${counter++}`;
  }

  return slug;
}
