/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider({ language: 'GII'} , {

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

      // a simple completion item which inserts `Hello World!`
      const simpleCompletion = new vscode.CompletionItem(vscode.env.appName);
      simpleCompletion.insertText = JSON.stringify(context);

      // a completion item that inserts its text as snippet,
      // the `insertText`-property is a `SnippetString` which will be
      // honored by the editor.
      const graphType = new vscode.CompletionItem('GRAPH_TYPE');
      graphType.insertText = new vscode.SnippetString("GRAPH_TYPE:${1|MSLine,MScolumn2D,MScombidy2D,angulargauge,bubble,column2D,line,msbar2D,mscombi2D,msstackedcolumn2D,msstackedcolumn2Dlinedy,pie2D,pie3D,pivot,stackedarea2D,stackedcolumn2Dline,table,text|}");
      graphType.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

      // return all completion items as array
      return [
        graphType,
        simpleCompletion
      ];
    }
  });

  const provider2 = vscode.languages.registerCompletionItemProvider(
    'plaintext',
    {
      provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

        // get all text until the `position` and check if it reads `console.`
        // and if so then complete if `log`, `warn`, and `error`
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (!linePrefix.endsWith('console.')) {
          return undefined;
        }

        return [
          new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
          new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
          new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
        ];
      }
    },
    '.' // triggered whenever a '.' is being typed
  );

  context.subscriptions.push(provider1, provider2);
}