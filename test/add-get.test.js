var tapes = require("../tap-es.js"); tapes.reset();
var test  = require('tape-catch');

tapes.add('description', ['1.jsx','2.jsx'], ['indesign-12','indesign-13'], function(){
    return 'works';
});

var result = tapes.get();

test('add-get.test', function (t) {
  t.equal(result.length, 1);
  t.equal(result[0].scripts[1], '2.jsx');
  t.equal(result[0].targets[1], 'indesign-13');
  t.equal(result[0].comparator(), 'works');
  t.end();
});

