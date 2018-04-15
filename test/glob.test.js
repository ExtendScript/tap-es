var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('test/fixtures/*.jsx','indesign-13');
var result = tapes.get();

test('testing glob paths', function (t) {
  t.equal(result[0].scripts[0], 'test/fixtures/es_test.jsx');
  t.end();
});
