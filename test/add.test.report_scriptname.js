var tapes = require("../tap-es.js"); tapes.reset();
var targets = require("./fixtures/directives.js").indesign;
var d = require('path').resolve(__dirname);

tapes.reportScriptName(true);
tapes.reportDuration(false);

// Create Test
//------------
tapes.add('Add and run test.', [d+'/fixtures/es_test.jsx'], targets, function(result,t){
    t.deepEqual(result,{x:0, y:0, width:3000, height: 5000});
});

// Run test
// --------
tapes.run(d+'/add.test.report_scriptname.md');
