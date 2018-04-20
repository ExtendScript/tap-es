# tap-es

[![version](https://img.shields.io/npm/v/tap-es.svg)](https://www.npmjs.org/package/tap-es)
[![status](https://travis-ci.org/ESCPP/tap-es.svg)](https://travis-ci.org/ESCPP/tap-es)
[![dependencies](https://david-dm.org/ESCPP/tap-es.svg)](https://david-dm.org/ESCPP/tap-es)
[![devDependencies](https://david-dm.org/ESCPP/tap-es/dev-status.svg)](https://david-dm.org/ESCPP/tap-es#info=devDependencies)


Tap-ExtendScript is a utiliy wrapper arround [estktap](https://github.com/ExtendScript/estktap). It adds a test bundler, generator and reporter that takes a test (or a set of tests) and pipes them to multiple app targets/versions and outputs a single report.

> When given an output file the report will be written in [tap-markdown](https://github.com/Hypercubed/tap-markdown) syntax.

## install

    npm install tap-es --save-dev

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
    tap-es.add(['test1.jsx','test2.jsx'], [indesign-13,photoshop-18])

[glob](https://github.com/isaacs/node-glob) patterns are supported:

    tap-es.add('test/*.indd.jsx', [indesign-12,indesign-13] )


## Running the tests

After having added the tests, we can use the `run()` command to run the tests and pipe the output to file (Markdown) and console:

    tap-es.run( 'result.md' )

> The run command resets tap-es   

Run the test file with `node run tests.js` or `tape run tests.js`

See [example](test/add.test.report.js)
