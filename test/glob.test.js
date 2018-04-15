var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('fixtures/*.jsx','indesign-13');

test('testing add()', function (t) {
  t.fail('we need sort out where and when this is done.');
  t.end();
});
