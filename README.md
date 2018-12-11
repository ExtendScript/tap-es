# tap-es

[![version](https://img.shields.io/npm/v/@extendscript/tap-es.svg)](https://www.npmjs.org/package/@extendscript/tap-es)
[![status](https://travis-ci.org/ExtendScript/tap-es.svg)](https://travis-ci.org/ExtendScript/tap-es)
[![dependencies Status](https://david-dm.org/ExtendScript/tap-es/status.svg)](https://david-dm.org/ExtendScript/tap-es)
[![devDependencies Status](https://david-dm.org/ExtendScript/tap-es/dev-status.svg)](https://david-dm.org/ExtendScript/tap-es?type=dev)

Tap-ExtendScript is a utiliy wrapper arround [estktap](https://github.com/nbqx/estktap). It adds a test bundler, generator and reporter that takes a test (or a set of tests) and pipes them to multiple app targets/versions and outputs a single report.

> When given an output file the report will be written in [tap-markdown](https://github.com/Hypercubed/tap-markdown) syntax.

## install

    npm install @extendscript/tap-es --save-dev

## create a test

Add a single line to the end of your test file:

    $.write( result );

Please read the [estktap guide](https://github.com/nbqx/estktap#readme) for more information.

## adding and generating tests

With the `add` function we can generate a test for each script to each target, we can run the `add` function multiple times before evoking the `run` command.

The `add` function takes three arguments:

  1. __scripts__ `String`, `Array`: Path to ExtendScript test files
  2. __target__ `String`, `Array`: Adobe app targets and version
  3. __comparator__ `Number`, `String`, `Boolean` or `Function` [Optional, defaults to `true`]

Example using multiple files and multiple targets:

    // Generates 4 tests
    tapes.add(['test1.jsx','test2.jsx'], [indesign-13,photoshop-18])

[glob](https://github.com/isaacs/node-glob) patterns are supported:

    tapes.add('test/*.indd.jsx', [indesign-12,indesign-13] )


## Report Options

We add the duration of the test to the report:

    tapes.reportDuration(true)

and/or add the file name of the test with:

    tapes.reportScriptName(true)


## Running the tests

After having added the tests, we can use the `run()` command to run the tests and pipe the output to file (Markdown) and console:

    tapes.run( 'result.md' )

> The run command resets tap-es   

Run the test file with `node run tests.js` or `tape run tests.js`

See [example](test/add.test.report.js)
