import * as vscode from "vscode";
import * as path from "path";
import { fileNameToKebabCase } from "./file-name-to-kebab-case";
import { applyPrefixes } from "./apply-prefixes";

export function getTargetUri(uri: vscode.Uri): vscode.Uri {
  const uriString = uri.toString();
  // Parse the URI to get the file path
  const filePath = decodeURI(uriString).replace(/^file:\/\//, "");

  // Get the filename from the file path
  const fileName = path.basename(filePath);

  const kebabCaseFileName = fileNameToKebabCase(fileName);

  const resultFileName = applyPrefixes(kebabCaseFileName);

  const uriBasePathString = uriString.replace(fileName, "");

  const targetUri = vscode.Uri.parse(uriBasePathString + resultFileName);

  return targetUri;
}
