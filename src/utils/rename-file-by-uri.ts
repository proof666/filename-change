import * as vscode from "vscode";
import { getTargetUri } from "./get-target-uri";

export function renameFileByUri(uri: vscode.Uri): void {
  vscode.workspace.fs.rename(uri, getTargetUri(uri));
}
