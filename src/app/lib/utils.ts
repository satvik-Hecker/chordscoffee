import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to conditionally join class names together
 * with intelligent Tailwind class merging.
 *
 * Usage:
 *  cn("base", condition && "extra", "p-2", "p-4") // -> "base extra p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
