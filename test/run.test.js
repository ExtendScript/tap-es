var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('test/fixtures/es_test.jsx',['indesign-12',"indesign-13"]);
tapes.run('./test/report.md');

test('should run all tests and create report', function (t) {
  t.fail("Needs to be implemented: " + ' ./test/report.md');
  t.end();
});
