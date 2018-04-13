function testObject(tests, mdPath) {
  return {
    // array (of test objects)
    tests : tests,
    // string (path to markdown report)
    mdPath: String(mdPath)
  }
}

function testFiles(scriptPath,targets,comparitor) {
  // Remove references
  targets = (Array.isArray(targets)) ? JSON.parse(JSON.stringify(targets)) : [String(targets)];

  switch (typeof targets) {
    case 'string':
      targets = [targets];
      break;
    case 'object':
    case 'array':
      break;
    default:
      targets = undefined;
  };

  switch (typeof comparitor) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'function':
      break;
    default:
      comparitor = true;
      break;
  };

  return {
    // string
    scriptPath: String(scriptPath),
    // array of strings
    targets: targets,
    // number, string, boolean, function
    comparitor: comparitor,
    // string
    mdPath: String(scriptPath) 
  }
}

function quickTestBuilder(scriptPaths,targets,comparitor,mdPath) {
  
  scriptPaths = (Array.isArray(scriptPaths)) ? JSON.parse(JSON.stringify(scriptPaths)) : [String(scriptPaths)];
  var count = scriptPaths.length, i = 0;

  var tests = [];
  for (i = 0; i < count; i++) { 
    tests.push( testObject(scriptPaths[],targets,comparitor) )
  };

  return testObject(tests, mdPath);
};
