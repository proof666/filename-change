import * as vscode from "vscode";
import { renameFileByUri } from "./utils/rename-file-by-uri";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "filename-case.changeCaseToKebab",
      (uri: vscode.Uri) => {
        if (uri) {
          renameFileByUri(uri);
        }
      }
    )
  );

  vscode.commands.executeCommand("setContext", "filesExplorer/context", true);
}

export function deactivate() {}
