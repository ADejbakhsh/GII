import path = require('path');
import * as vscode from 'vscode';
import { Graph } from './controller/graph';

export function activate(context: vscode.ExtensionContext) {

  const provider1 = vscode.languages.registerCompletionItemProvider({ language: 'GII', pattern: '**/UNIVERSE_FACTORY/**' }, {

    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

      if (position.character < 11) {
        // a completion item that inserts its text as snippet,
        // the `insertText`-property is a `SnippetString` which will be
        // honored by the editor.
        const graphType = new vscode.CompletionItem('GRAPH_TYPE');
        graphType.insertText = new vscode.SnippetString("GRAPH_TYPE:${1|MSLine,MScolumn2D,MScombidy2D,angulargauge,bubble,column2D,line,msbar2D,mscombi2D,msstackedcolumn2D,msstackedcolumn2Dlinedy,pie2D,pie3D,pivot,stackedarea2D,stackedcolumn2Dline,table,text|}");
        graphType.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

        const graphExp = new vscode.CompletionItem('GRAPH_EXP');
        graphExp.commitCharacters = [':'];
        graphExp.documentation = new vscode.MarkdownString('List expression that are in the same folder');

        const graphEval = new vscode.CompletionItem('GRAPH_EVAL');
        graphExp.commitCharacters = [':'];
        graphExp.documentation = new vscode.MarkdownString('All graph eval');

        return [
          graphType,
          graphExp,
          graphEval
        ];
      }
    }
  });

  const provider2 = vscode.languages.registerCompletionItemProvider({ language: 'GII', pattern: '**/UNIVERSE_FACTORY/**' }, {
    async provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
      const linePrefix = document.lineAt(position).text.substr(0, position.character);

      if (position.character < 11) {
      if (/^GRAPH_EXP/.test(linePrefix)) {
        console.log('GRAPH_EXP');
        return await Graph.exp(document);

      }

      if (/^GRAPH_EVAL/.test(linePrefix)) {
        console.log('GRAPH_EVAL');
        return Graph.eval();

      }
    }

      if (/LAST_CHART_DESC/.test(linePrefix)) {
        console.log('GRAPH_TYPE');
        return Graph.lastChartDesc();
      }

      return undefined;
    }
  },
  );

  context.subscriptions.push(provider1, provider2);
}