import path = require('path');
import * as vscode from 'vscode';

export class Graph {
  static async exp(document: vscode.TextDocument): Promise<Array<vscode.CompletionItem>> {

    console.log('provideCompletionItems');
    const expressionPath = path.parse(document.uri.fsPath).dir + '/expressions.txt';
    const expression = await vscode.workspace.openTextDocument(expressionPath);
    const text = expression.getText();
    const listExpressions = text.match(/^[a-zA-Z_0-9]*=/mg) || [];

    const array: Array<vscode.CompletionItem> = [];
    listExpressions.every((item) => {
      array.push(new vscode.CompletionItem(item, vscode.CompletionItemKind.Method));
      return true;
    });

    return array;
  }
}