export function sanitizeInput (input: string): string {
  // Remove HTML tags and encode special entities
  let sanitized = input.replace(/<[^>]*>?/gm, '');

  // Removes characters other than letters, numbers, spaces, and some punctuation characters
  sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?-]/g, '');

  // Convert special characters to HTML entities to prevent HTML injection
  const div = document.createElement('div');
  div.textContent = sanitized;
  return div.innerHTML;
}