interface listExpressionsT {
  item: string,
  desc: string | undefined,
}

const query_desc: listExpressionsT[] = [
  { item: 'callback', desc: 'String  \n   DB argument.  \n   e.g ```"limit(10)" or "sort(5,\'desc\')"```' },
  { item: 'callbackSB', desc: 'String  \n    Allow you to change de sort column in SB, work in tandem with ```GRAPH_EVAL:setCallback```' },
  { item: 'dataSource', desc: 'Allow you to choose which DB to query. It’s for external Oracle DB.  \n  The variable is defined in config_customer.js ' },
  { item: 'dfaiChart', desc: undefined },
  { item: 'dimWhere', desc: 'Overwrite the « where » template linked to the current graph.  \n  %where% '},
  { item: 'dimensionNames', desc:  'Name of the dimension in case it\'s different from the one in the template.'},
  { item: 'dimensions', desc: 'Work with ```GRAPH_EVAL:LAST_CHART_DESC.query.dimensionsNames```  \n There must be a name for each argument in query dimensions.' },
  { item: 'dynamicExp', desc: 'Enable checkbox feature on a table graph, the checkbox can be saved locally.  \n The clear of checkbox can be scheduled by the client for any frequencies.' },
  { item: 'expressionNames[0]', desc: 'String  \n   Chose the name of the expression. Note that you can put a query inside the [ ]  \n  e.g. ```[LAST_CHART_DESC.query.expressionNames.length-1]```' },
  { item: 'extSQLPath', desc: 'String  \n   Chose a file .sql and execute that query ' },
  { item: 'hideIfNullCol', desc: 'String  \n   Chose a col from GRAPH_EXP and hide it if it is null. ' },
  { item: 'isReadOnly', desc: 'Boolean' },
  { item: 'noCache', desc: 'Boolean' },
  { item: 'notHidden', desc: 'String  \n   It allows you to hide all expression except the one that contain the tag.' },
  { item: 'parentYAxis', desc: undefined },
  { item: 'pkExp', desc: 'String  \n   Chose the Primary key expression.' },
  { item: 'removeDimIds', desc: 'String[]  \n   Remove a dimension. The dimension id come from where.js . Mostly used for time and permission. ' },
  { item: 'removeGroupBy', desc: 'Boolean  \n   Allow you to do “flat”   SELECT without group by.  \n  So instead of doing  \n ``` SELECT the_dim, sum(the_exp) FROM the_view GROUP BY the_dim```   \n  It will do  \n  ```SELECT the_dim, sum(the_exp) FROM the_view``` ' },
  { item: 'renderAs', desc: 'String[]  \n  Can have an unlimited number of arguments.  \n  GRAPH_EVAL:LAST_CHART_DESC.query.renderAs=["column","line"]; ' },
  { item: 'selectedTimeColumns', desc: undefined },
  { item: 'showRowIndex', desc: 'Boolean  \n  Show row index on table type graph.' },
  { item: 'sliding', desc: 'string y/n  \n  Enable query sliding.  \n  The period of sliding is defined in static_where.js' },
  { item: 'sortKey', desc: 'String  \n  Change the sort key  \n  ```GRAPH_EVAL:LAST_CHART_DESC.query.sortKey="CAO_SORT";```' },
  { item: 'target', desc: '❌Deprecated' }
];

export default query_desc;