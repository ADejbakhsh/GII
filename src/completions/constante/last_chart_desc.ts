interface listExpressionsT {
  item: string,
  desc: string,
}

const last_chat_desc : listExpressionsT[] = [
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
    item: 'display', desc: 'y/n Disable or enable graph, \
        if it’s bookmarked it will still be displayed on the bookmark.'
  },
  {
    item: 'doubleHeight', desc: 'Boolean Double the Height of the graphs relative to default.'
  },
  {
    item: 'drill', desc: ''
  },
  {
    item: 'drillOnDim', desc: 'Passes one or two or both (etc.) information to the next graph, in that order.'
  },
  {
    item: 'drillTrees', desc: 'drillTrees: define the type of drill-down available in this template.\
       See 7.9 for more info. '
  },
  {
    item: 'excelStyleEdit', desc: 'Set style to excel, \
      Reduce the number of click needed to change value in cell.'
  },
  {
    item: 'fatherChartIds', desc: 'Takes the selection of graph A in graph B.\
       The information is declared in B to know where to pull the data.'
  },
  {
    item: 'fatherChartMandatoryIds', desc: 'Takes the selection of graph A in graph B. \
      The information is declared in B to know where to pull the data.'
  },
  {
    item: 'fullHeight', desc: 'Boolean Use the full height if it’s the only graph.\
               ⚠Get buggy if it’s not the only graph.'
  },
  {
    item: 'fullScreen', desc: 'Boolean'
  },
  {
    item: 'graphTypes', desc: 'Let’s say you have a line graph which show sell in Y with time in X.\
      And now you want to see how product sells by store shelf.\
      Depending on which dimension you want to drill it will show the specified graph.\
      By default in chart_template/xx.json file, but this function allows to override the default setting.\
        '
  },
  {
    item: 'html', desc: 'Path You can create your own template creating your HTML file in the html directory.\
      Can only work If the graph type equal text.\
      See 7.14'
  },
  {
    item: 'htmlDefines', desc: 'Makes html more interactive.\
        See doc: dyn_html_101.txt Philippe Toudou \
        '
  },
  {
    item: 'htmlPath', desc: 'Path You can create your own template creating your HTML file in the html directory.\
      Can only work If the graph type equal text.\
      See 7.14'
  },
  {
    item: 'noDrill', desc: 'Boolean Remove the ability to drill.'
  },
  {
    item: 'noEditor', desc: 'Boolean '
  },
  {
    item: 'noSelfService', desc: 'Boolean'
  },
  {
    item: 'noTap', desc: 'Boolean You won’t be able to open the graph in big when you click on it.\
      Useful with linked graph.'
  },
  {
    item: 'pivotConf', desc: 'Object On pivot graph.\
      Plugin integration \
      https: //github.com/nicolaskruchten/pivottable \
      '
  },
  {
    item: 'query', desc: 'Containe sub option to make query'
  },
  {
    item: 'removeLineLimitation', desc: 'Boolean On table graph show all the line available.\
      ⚠ Impact front end performance.'
  },
  {
    item: 'sameCurrencyNumberFormat', desc: 'Boolean Show all values in a table using the same format for all columns “nothing/K/M” (table graph only).'
  },
  {
    item: 'splitExpressions', desc: 'In the case of msstackedcolumn2d graph type. \
      Allow you to choose which expression is stacked in which is not.\
      None stacked expression will be on an other column.\
      basic splitExpressions with strings: [\
      "label firt half",\
    "label second half"\
    ]\
 splitExpressions with json: [json1, json2 etc..\
    ]\
json = {\
  rExpId: , others: true / false, label: , isLine: true / false\
}\
'
  },
  {
    item: 'tabLabel', desc: 'Change the tab name.'
  },
  {
    item: 'templateVuejs', desc: 'Missing Documentation'
  },
  {
    item: 'type', desc: 'Override graph type.\
      let say you have a GRAPH_TYPE:table|line|column2d\
      Universe factory will automatically change it to the type msline (ms=multiserie).\
      This option allow you to put what you really want.\
      '
  }
];

module.exports = last_chat_desc;