import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// py-2 px-2 -> p-2 It optimizes the classNames we pass
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
