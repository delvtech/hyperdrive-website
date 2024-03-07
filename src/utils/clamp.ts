/**
 * Clamps a number between a minimum and maximum value
 * @param value - The number to clamp
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns
 */
export function clamp({
  value,
  min,
  max,
}: {
  value: number;
  min: number;
  max: number;
}): number {
  return Math.min(Math.max(value, min), max);
}
