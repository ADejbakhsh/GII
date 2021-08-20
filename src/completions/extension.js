"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
require();
function activate(context) {
    const provider1 = vscode.languages.registerCompletionItemProvider({ language: 'GII', pattern: '**/UNIVERSE_FACTORY/**' }, {
        provideCompletionItems(document, position, token, context) {
            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which will be
            // honored by the editor.
            const graphType = new vscode.CompletionItem('GRAPH_TYPE');
            graphType.insertText = new vscode.SnippetString("GRAPH_TYPE:${1|MSLine,MScolumn2D,MScombidy2D,angulargauge,bubble,column2D,line,msbar2D,mscombi2D,msstackedcolumn2D,msstackedcolumn2Dlinedy,pie2D,pie3D,pivot,stackedarea2D,stackedcolumn2Dline,table,text|}");
            graphType.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");
            // return all completion items as array
            return [
                graphType
            ];
        }
    });
    const provider2 = vscode.languages.registerCompletionItemProvider({ language: 'GII', pattern: '**/UNIVERSE_FACTORY/**' }, {
        async provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (/^GRAPH_EXP/.test(linePrefix)) {
            }
            else if (linePrefix.endsWith('console.')) {
                // get all text until the `position` and check if it reads `console.`
                // and if so then complete if `log`, `warn`, and `error`
                const array = [
                    new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                    new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                    new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
                ];
                console.log('array', array);
                return array;
            }
            return undefined;
        }
    });
    context.subscriptions.push(provider1, provider2);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map