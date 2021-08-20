import path = require('path');
import * as vscode from 'vscode';

export class Graph {

  // return all the expression revelant to the context
  static async exp(document: vscode.TextDocument): Promise<Array<vscode.CompletionItem>> {

    const mapResult = ['/expressions.txt', '/expressions_fct.txt'].map(async (expressionFile): Promise<Array<vscode.CompletionItem>> => {
      const expressionPath = path.parse(document.uri.fsPath).dir + expressionFile;
      let expression;
      try {
        expression = await vscode.workspace.openTextDocument(expressionPath);
      } catch (e) {
        return [];
      }
      console.log(expressionPath, expression);
      const text = expression.getText();
      const listExpressions = text.match(/^[a-zA-Z_0-9]*=/mg) || [];

      const array: Array<vscode.CompletionItem> = [];

      listExpressions.every((item) => {
        // remove equal signe at the end of the string
        const exp = item.substring(0, item.length - 1);
        const completionItem = new vscode.CompletionItem(exp);
        completionItem.kind = vscode.CompletionItemKind.Method;

        array.push(completionItem);
        return true;
      });

      return array;
    });

    const result = await Promise.all(mapResult);

    return result[0].concat(result[1]);
  }
}