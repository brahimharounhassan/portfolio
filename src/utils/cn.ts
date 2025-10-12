import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine et merge les classes Tailwind CSS
 * @param inputs - Classes CSS à combiner
 * @returns Classes CSS mergées
 */
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return twMerge(clsx(inputs))
}
