type ClassValue = string | number | null | boolean | undefined;

/** Minimal className combiner so we don't need an extra dependency. */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
