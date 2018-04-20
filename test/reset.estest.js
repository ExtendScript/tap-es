var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');
var targets = require("./fixtures/directives.js").indesign;
var d = require('path').resolve(__dirname);

// Create Test
//------------
tapes.add('Add and run test.', [d+'/fixtures/es_test.jsx'], targets, function(r,t){
    t.deepEqual(r,{x:0, y:0, width:3000, height: 5000});
});

// Run test
// --------
tapes.run(d+'/add.test.report.md');

test('run clears/reset tape-es', function (t) {  
  t.equal(tapes.get().length, 0);
  t.end();
});
