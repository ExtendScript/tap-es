var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('test1.jsx','indesign-12');

var result = tapes.get();

test('should return Array of added test', function (t) {
  t.equal(Array.isArray(result), true);
  t.equal(result.length, 1);
  t.equal(result[0].targets[0], 'indesign-12');
  t.equal(result[0].scripts[0], 'test1.jsx');
  t.equal(result[0].comparator, true);
  t.end();
});
