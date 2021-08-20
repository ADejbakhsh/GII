"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const path = require("path");
const vscode = require("vscode");
class Graph {
    async exp(document) {
        console.log('provideCompletionItems');
        const expressionPath = path.parse(document.uri.fsPath).dir + '/expressions.txt';
        const expression = await vscode.workspace.openTextDocument(expressionPath);
        const text = expression.getText();
        const listExpressions = text.match(/^[a-zA-Z_0-9]*=/mg) || [];
        const array = [];
        listExpressions.every((item) => {
            array.push(new vscode.CompletionItem(item, vscode.CompletionItemKind.Method));
            return true;
        });
        return array;
    }
}
exports.Graph = Graph;
//# sourceMappingURL=graph.js.map