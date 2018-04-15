// The tapestry

var os = require('os');
var estktap = require('estktap');
var test = require('tape');

var bLen = builds.length, bI = 0;

test('Test Count',function(t) {
    t.equal(bLen, 100);
    t.end();
});

for (bI = 0; bI < bLen; bI++) {
  var build = builds[bI];
  var targets = build.targets;
  var tLen = targets.length, tI = 0;
  for (tI = 0; tI < tLen; tI++) { 
    var myTarget = targets.pop();
    test(os.type() + ' ' + myTarget + ' filename here',function(t) {
      estktap(os.type() + ' ' + myTarget + ' filename here', build.script, build.comparator, [myTarget]);
      t.end();
    });
  };
};

tapes.deck.reset();
