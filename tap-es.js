// tap-es

var duration = true;

/*
  A helper function to clean array reference and type of content
  -----
  Param arr  : Array to be de-referenced
  Param inst : Type of content  

*/
function cleanArray( arr, inst ) {
  // Clean array reference and make sure arr is type of array
  var a = (Array.isArray(arr)) ? arr.splice(0) : [arr];
  var i = a.length;
  while (i--) {
    if (! a[i] instanceof inst) { 
      a.splice(i, 1);
    };
  };
  return a;
};

/*
  Single Test
  -----
  Param tests      : String: Path to script
  Param targets    : Array, String: [list of] Adobe application target
  Param comparator : Number, String, Boolean, Function: Test comparator

*/
function Test( description, scripts, targets, comparator ) {
  var _Test = this;
  // Object must be created with new
  if( !(_Test instanceof Test) ){
    return new Test( tests, targets, comparator );
  };

  // String: Test description
  _Test.description = String( description );
  
  // String: Path to JSX script
  _Test.scripts = cleanArray( scripts, String );

  // Array: of target strings
  _Test.targets = cleanArray( targets, String );

  // Parse test comparator
  switch (typeof comparator) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'function':
      _Test.comparator = comparator;
      break;
    case 'object':
      console.log('WARNING: type of comparator cannot be set to objects, using default instead.');
    default:
      _Test.comparator = true;
      break;
  };
};

/*
  The Deck holds all tests that need to be taped
  -----
  Param tests      : Array of objects (Test)
  Param resultPath : String: Path to export file (eg /path/to/results.md)

*/
function Deck( tests ) {
  var _Deck = this;
  // Object must be created with new
  if( !(_Deck instanceof Deck) ){
    return new Deck( tests, resultPath );
  };
  
  // Array: Containing tests
  _Deck.tests = new Array();

  _Deck.add = function( tests ) {
    if ( Array.isArray(tests) ){
      _Deck.tests.concat(cleanArray( Test, tests.slice(0) ));
    } else if(tests instanceof Test) {
      _Deck.tests.push(tests);
    };
  };
  
  _Deck.get = function() {
    return _Deck.tests.slice(0);
  };

  _Deck.reset = function() {
    _Deck.tests = new Array();
  };

  _Deck.add( tests );
};

//----------------------------------------------------------------------
var exports = {};
//----------------------------------------------------------------------

var setDuration = exports.setDuration = function( durationBool ) {
  duration = Boolean(durationBool);
};

var deck = exports.deck = new Deck();

var reset = exports.reset = function() {
  deck.reset();
};

/*
  Function: Get all tests loaded in the deck
  -----
  Returns: Array of Test objects 
*/
var get = exports.get = function() {
  return deck.get();
};

/*
  Function: Get all tests loaded in the deck
  -----
  Returns: Array of paths
  // Note I have exported this function mainly as a hook for testing
*/

var resolveGlob = exports.resolveGlob = function( pathStr ) {
  var glob = require("glob"), isGlob = require('is-glob');
  var filePaths = [];
  if( isGlob( pathStr ) ) {
    filePaths = glob.sync( pathStr ).slice(0);
  } else {
    filePaths.push( pathStr );
  };
  return filePaths;
};

/*
  Function: Test Generator
  -----
  Param scripts    : String, Array: [list of] Path to script, or glob path
  Param targets    : Array, String: [list of] Adobe application target
  Param comparator : Number, String, Boolean, Function: Test comparator

*/
var add = exports.add = function( description, scripts, targets, comparator) {
  deck.add( new Test( description, scripts, targets, comparator ) );
};


/*
  Function: Test Runner
  -----
  Param output:  String: Path to export file (eg /path/to/results.md)

*/
var run = exports.run = function( output ) {
  var shell = require('shelljs'), serialize = require('serialize-javascript');
  var tests = deck.get(), flatDeck = [];

  var x = tests.length;
  while(x--) {
    var test = tests[x];
    var s = test.scripts.length;
    while(s--) {
      var scripts = resolveGlob(test.scripts[s]);
      flatDeck.push({description: test.description, scripts: scripts, targets: test.targets, comparator: test.comparator});
    };
  };

  var cmd = 'node '+ __dirname +'/run-tap.js -b "' + encodeURI(escape(serialize(flatDeck,{unsafe:true}))) + '"';

  if( output === undefined ) {
    shell.exec(cmd);
  } else {
    shell.exec(cmd).exec("tap-markdown --duration " + String(duration), {silent:true}).to( String(output) );
  };

  reset();

};

//----------------------------------------------------------------------
module.exports = exports;
//----------------------------------------------------------------------