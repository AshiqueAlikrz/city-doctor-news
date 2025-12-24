import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TranslationKeys = "latestNewsCap" | "uae" | "travel" | "business" | "livingInUae" | "world" | "entertainment" | "sport" | "lifestyle" | "podcasts";
const sections = ["latestNewsCap", "uae", "travel", "business", "livingInUae", "world", "entertainment", "sport", "lifestyle", "podcasts"];
export { sections, type TranslationKeys };
