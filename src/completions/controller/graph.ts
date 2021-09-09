import path = require('path');
import * as vscode from 'vscode';
import last_chart_desc  from '@constante/last_chart_desc';

interface listExpressionsT {
  item: string,
  desc: string,
}
export class Graph {

  // return all the expression revelant to the context
  static async exp(document: vscode.TextDocument): Promise<Array<vscode.CompletionItem>> {

    const mapResult = ['/expressions.txt', '/expressions_fct.txt'].map(async (expressionFile): Promise<Array<vscode.CompletionItem>> => {
      const expressionPath = path.parse(document.uri.fsPath).dir + expressionFile;
      let expression: vscode.TextDocument;
      try {
        expression = await vscode.workspace.openTextDocument(expressionPath);
      } catch (e) {
        return [];
      }
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

  static eval(): Array<vscode.CompletionItem> {
    const listExpressions = [
      'GLOBAL.graphFns',
      'LAST_CHART_DESC',
      'delete',
      'for',
      'setCallback',
      'setCallbackN',
      'setShowExpressions',
      'setSmartTotal',
      'setStaticWhereSuffix',
      'setTotalExpressions',
      'setWeightExpressions'];

    return Graph.completionItem(listExpressions);
  }

  static lastChartDesc(): Array<vscode.CompletionItem> {
    const vscC = vscode.CompletionItemKind;
    let listExpressions = last_chart_desc;

    return Graph.completionItem(listExpressions);
  }

  static completionItem(listExpressions: listExpressionsT[]): vscode.CompletionItem[] {
    const array: Array<vscode.CompletionItem> = [];

    listExpressions.every((expression) => {
      const completionItem = new vscode.CompletionItem(expression.item);
      completionItem.kind = vscode.CompletionItemKind.Method;
      completionItem.documentation = new vscode.MarkdownString(expression.desc);


      array.push(completionItem);
      return true;
    });

    return array;
  }
}