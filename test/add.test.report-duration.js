var tapes = require("../tap-es.js").reset().reportScriptName(true).reportDuration(false);
var targets = require("./fixtures/directives.js").all;
var d = require('path').resolve(__dirname);

// Create Test
//------------
tapes.add('Add and run test.', [d+'/fixtures/es_test.jsx'], targets, function(result,t){
    t.deepEqual(result,{x:0, y:0, width:3000, height: 5000});
});

// Run test
// --------
tapes.run(d+'/add.test.report-duration.md');
