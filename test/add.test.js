var tapes = require("../tap-es.js"); tapes.reset();
var directives = require("./testDirectives.js");
var path = require('path');
var dot = path.resolve(__dirname);

var targets = directives.indesign;
var expectedResult = { x: 0, y: 0, width: 3000, height: 5000 };

tapes.add([dot+'/fixtures/es_test.jsx'], targets, function(d){
    t.deepEqual(d,{x:0, y:0, width:3000, height: 5000});
});

tapes.run(dot+'/add.test.md');

/* Test content of add.test.md here 
var test = require('tape-catch');
test('testing add()', function (t) {
  t.equal(result.length, 1);
  t.equal(result[0].scripts[1], 'test2.jsx');
  t.equal(result[0].targets[1], 'indesign-13');
  t.equal(result[0].comparator(), 'works');
  t.end();
});
*/
