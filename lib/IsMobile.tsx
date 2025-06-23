export function isMobile(userAgent: string | undefined): boolean {
  return !!userAgent?.match(/Android|iPhone|iPad|iPod|Mobile/i);
}
