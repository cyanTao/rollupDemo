console.log(1)


// import myStaticPluginG6 from '@antv/g6';
// window.myStaticPluginG6 = myStaticPluginG6;
// console.log(myStaticPluginG6)

// import * as myStaticPluginX6 from '@antv/x6';
// window.myStaticPluginX6 = myStaticPluginX6;
// console.log(myStaticPluginX6)

// import * as myStaticPluginMonacoEditor from 'monaco-editor'
// window.myStaticPluginMonacoEditor = myStaticPluginMonacoEditor
// console.log(myStaticPluginMonacoEditor)

// console.log(require('echarts'))
// window.myStaticPluginEcharts = require('echarts');
import * as myStaticPluginEcharts from 'echarts'
console.log(1, myStaticPluginEcharts)
export {
  // myStaticPluginG6,
  // myStaticPluginX6,
  // myStaticPluginMonacoEditor,
  myStaticPluginEcharts
}