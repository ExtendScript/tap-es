// The tapestry

// Remove nodePath, scriptpath from argv
var argv = require('minimist')(process.argv.slice(2),{
  alias: { b: 'buffer' }
});

var testDeck = eval(unescape(decodeURI(argv.buffer)));

if( typeof testDeck !== 'object' ) {
  throw "Could not read buffer from argument vector";
};

var os = require('os').type();
var estktap = require('estktap');

var d = testDeck.length;
while (d--) {
  var tests = testDeck[d];
  var descr = tests.description;
  var targets = tests.targets;
  var comparator = tests.comparator;
  var scripts = tests.scripts;
  var s = scripts.length;
  while (s--) { 
    var script = scripts[s];
    var x = targets.length;
    while (x--) {
      var myTarget = targets[x];
      estktap(os + ' ' + myTarget + ': ' + descr, script, comparator, [myTarget]);
    };
  };
};
