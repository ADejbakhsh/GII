import path = require('path');
import * as vscode from 'vscode';
import last_chart_desc from '../constante/last_chart_desc';
import query_desc from '../constante/query_desc';

interface listExpressionsT {
  item: string,
  desc: string | undefined,
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

    return Graph.completionArray(listExpressions);
  }

  static lastChartDesc(): Array<vscode.CompletionItem> {
    return Graph.completionItem(last_chart_desc);
  }

  static chartConfig(): Array<vscode.CompletionItem> {

    const listExpressions = [
      "anchorRadius",
      "chartRightMargin",
      "clipBubbles",
      "formatnumberscale",
      "labelDisplay",
      "labelFontSize",
      "legendItemFontSize",
      "numberPrefix",
      "pYAxisName",
      "paletteColors",
      "placevaluesInside",
      "rotateValues",
      "sFormatNumberScale",
      "sYAxisName",
      "showLegend",
      "showSum",
      "showTotal",
      "showValues",
      "subCaption",
      "tabLabel",
      "valueFontBold",
      "valueFontSize",
      "xAxisName",
      "yAxisMaxValue",
      "yAxisMinValue",
      "yAxisName",
      "zAxisName",
    ];
    return Graph.completionArray(listExpressions);

  }

  static query(): Array<vscode.CompletionItem> {
    return Graph.completionItem(query_desc);
  }

  static completionItem(listExpressions: listExpressionsT[]): vscode.CompletionItem[] {
    const array: Array<vscode.CompletionItem> = [];

    listExpressions.every((expression) => {
      const completionItem = new vscode.CompletionItem(expression.item);
      completionItem.kind = vscode.CompletionItemKind.Method;
      if (expression.desc) {
        completionItem.documentation = new vscode.MarkdownString(expression.desc);
      } else {
        completionItem.documentation = new vscode.MarkdownString('Missing documentation');
      }


      array.push(completionItem);
      return true;
    });

    return array;
  }

  static completionArray(listExpressions: string[]): vscode.CompletionItem[] {
    const array: Array<vscode.CompletionItem> = [];

    listExpressions.every((expression) => {
      const completionItem = new vscode.CompletionItem(expression);
      completionItem.kind = vscode.CompletionItemKind.Method;

      array.push(completionItem);
      return true;
    });

    return array;
  }
}