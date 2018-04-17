// The tapestry

// Remove nodePath, scriptpath from argv
var argv = require('minimist')(process.argv.slice(2),{
  alias: { b: 'buffer' }
});

var testDeck = eval(unescape(decodeURI(argv.buffer)));

if( typeof testDeck !== 'object' ) {
  throw "Could not read buffer from argument vector";
};

var os = require('os');
var path = require('path');
var test = require('tape-catch');
var estktap = require('estktap');

var d = testDeck.length;
while (d--) {
  var tests = testDeck[d];
  var targets = tests.targets;
  var comparator = tests.comparator;
  var scripts = tests.scripts;
  var s = scripts.length;
  while (s--) { 
    var script = scripts[s];
    var scriptName = path.basename(script, path.extname(script));
    var x = targets.length;
    while (x--) {
      var myTarget = targets[x];
      estktap(os.type() + ' ' + myTarget + ' ' + scriptName, script, comparator, [myTarget]);
    };
  };
};
