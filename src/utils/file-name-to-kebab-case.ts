import { toKebabCase } from "./to-kebab-case";

export function fileNameToKebabCase(fileName: string): string {
  // Separate the filename and extension
  const parts = fileName.split(".");
  const fileExt = parts.pop();
  const fileBaseName = parts.join(".");

  // Convert filename to kebab-case
  const kebabCaseName = toKebabCase(fileBaseName);

  // Concatenate kebab-cased filename with the original extension
  const kebabCaseFileName = `${kebabCaseName}.${fileExt}`;

  return kebabCaseFileName;
}
