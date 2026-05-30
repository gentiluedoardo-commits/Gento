/** Tiny classnames joiner — avoids an extra dependency for a marketing site. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
