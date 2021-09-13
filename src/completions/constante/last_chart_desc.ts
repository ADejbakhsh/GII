interface listExpressionsT {
  item: string,
  desc: string | undefined,
}

const last_chat_desc: listExpressionsT[] = [
  {
    item: '_len', desc: 'Return the length of the object'
  },
  {
    item: 'chartConfig', desc: 'Option to configure the graph X and Y name and more'
  },
  {
    item: 'complexType', desc: 'Deprecated'
  },
  {
    item: 'defaultOrder', desc: 'The default sorts order of a table on n column. n start counting by the left.'
  },
  {
    item: 'display', desc: 'y/n Disable or enable graph,  \n   if it’s bookmarked it will still be displayed on the bookmark.'
  },
  {
    item: 'doubleHeight', desc: 'Boolean  \n   Double the Height of the graphs relative to default.'
  },
  {
    item: 'drill', desc: undefined
  },
  {
    item: 'drillOnDim1', desc: 'Boolean  \n   Passes the first information to the next graph'
  },
  {
    item: 'drillOnDim2', desc: 'Boolean  \n   Passes the seconde information to the next graph.'
  },
  {
    item: 'drillOnDim12', desc: 'Boolean  \n   Passes the fist and second information to the next graph, in that order.'
  },
  {
    item: 'drillOnDim123', desc: 'Boolean  \n   Passes the fist, second and third information to the next graph, in that order.'
  },
  {
    item: 'drillTrees', desc: 'drillTrees: define the type of drill-down available in this template.  \n    See 7.9 for more info. '
  },
  {
    item: 'excelStyleEdit', desc: 'Set style to excel,  \n    Reduce the number of click needed to change value in cell.'
  },
  {
    item: 'fatherChartIds', desc: 'Takes the selection of graph A in graph B.  \n    The information is declared in B to know where to pull the data.'
  },
  {
    item: 'fatherChartMandatoryIds', desc: 'Takes the selection of graph A in graph B.  \n    The information is declared in B to know where to pull the data.'
  },
  {
    item: 'fullHeight', desc: 'Boolean  \n   Use the full height if it’s the only graph.  \n\n   ⚠ Get buggy if it’s not the only graph.'
  },
  {
    item: 'fullScreen', desc: 'Boolean'
  },
  {
    item: 'graphTypes', desc: 'Let’s say you have a line graph which show sell in Y with time in X.  \n  And now you want to see how product sells by store shelf.  \n  Depending on which dimension you want to drill it will show the specified graph.  \n  By default in chart_template/xx.json file, but this function allows to override the default setting. '
  },
  {
    item: 'html', desc: 'Path You can create your own template creating your HTML file in the html directory.  \n  Can only work If the graph type equal text.  \n  See 7.14'
  },
  {
    item: 'htmlDefines', desc: 'Makes html more interactive.  \n     See doc: dyn_html_101.txt Philippe Toudou  '
  },
  {
    item: 'htmlPath', desc: 'Path You can create your own template creating your HTML file in the html directory.  \n  Can only work If the graph type equal text.  \n  See 7.14'
  },
  {
    item: 'noDrill', desc: 'Boolean  \n   Remove the ability to drill.'
  },
  {
    item: 'noEditor', desc: 'Boolean'
  },
  {
    item: 'noSelfService', desc: 'Boolean'
  },
  {
    item: 'noTap', desc: 'Boolean  \n   You won’t be able to open the graph in big when you click on it.  \n     Useful with linked graph.'
  },
  {
    item: 'pivotConf', desc: 'Object On pivot graph.  \n  Plugin integration  \n    https: //github.com/nicolaskruchten/pivottable  \n    '
  },
  {
    item: 'query', desc: 'Containe sub option to make query'
  },
  {
    item: 'removeLineLimitation', desc: 'Boolean  \n   On table graph show all the line available.  \n  ⚠ Impact front end performance.'
  },
  {
    item: 'sameCurrencyNumberFormat', desc: 'Boolean  \n   Show all values in a table using the same format for all columns “nothing/K/M” (table graph only).'
  },
  {
    item: 'splitExpressions', desc: 'In the case of msstackedcolumn2d graph type.  \n    Allow you to choose which expression is stacked in which is not.  \n  None stacked expression will be on an other column.  \n  basic splitExpressions with strings: [  \n  "label firt half",    "label second half"    ] splitExpressions with json: [json1, json2 etc..    ]\
json = {  rExpId: , others: true / false, label: , isLine: true / false}'
  },
  {
    item: 'tabLabel', desc: 'Change the tab name.'
  },
  {
    item: 'templateVuejs', desc: undefined
  },
  {
    item: 'type', desc: 'Override graph type.  \n  let say you have a GRAPH_TYPE:table|line|column2d  \n  Universe factory will automatically change it to the type msline (ms=multiserie).  \n  This option allow you to put what you really want.  \n  '
  }
];

export default last_chat_desc;