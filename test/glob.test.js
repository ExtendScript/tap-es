var test  = require('tape-catch');

test('testing glob paths', function (t) {
  var tapes = require("../tap-es.js");
  t.deepEqual(tapes.resolveGlob('test/fixtures/*.jsx'), [ 'test/fixtures/es_test.jsx' ]);
  t.end();
});
