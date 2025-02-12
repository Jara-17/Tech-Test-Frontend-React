export function isValidImageUrl(url: string): boolean {
  try {
    // Verifica que sea una URL válida.
    new URL(url);
  } catch {
    return false;
  }
  // Comprueba que la URL termine en una extensión de imagen común.
  return /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(url);
}
