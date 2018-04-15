var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('test1.jsx','indesign-12');
var resultAdd = tapes.get();
tapes.reset();
var resultClear = tapes.get();

test('reset clears all tests', function (t) {  
  t.equal(resultAdd.length, 1);
  t.equal(resultClear.length, 0);
  t.end();
});

