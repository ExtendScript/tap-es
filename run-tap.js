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

var dLen = testDeck.length, di = 0;
for (di = 0; di < dLen; di++) {
  var tests = testDeck[di];
  var targets = tests.targets;
  var comparator = tests.comparator;
  var scripts = tests.scripts;
  var slen = scripts.length, si = 0;
  for (si = 0; si < slen; si++) { 
    var script = scripts[si];
    var scriptName = path.basename(script, path.extname(script));
    var tlen = targets.length, ti = 0;
    for (ti = 0; ti < tlen; ti++) { 
      var myTarget = targets[ti];
      test(os.type() + ' ' + myTarget + ' ' + scriptName, function(t) {
        estktap(os.type() + ' ' + myTarget + ' ' + scriptName, script, comparator, [myTarget]);
        t.end();
      });
    };
  };
};
