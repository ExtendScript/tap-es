# tap-es

[![version](https://img.shields.io/npm/v/tap-es.svg)](https://www.npmjs.org/package/tap-es)
[![status](https://travis-ci.org/ES-CPP/tap-es.svg)](https://travis-ci.org/ES-CPP/tap-es)
[![dependencies](https://david-dm.org/ES-CPP/tap-es.svg)](https://david-dm.org/ES-CPP/tap-es)
[![devDependencies](https://david-dm.org/ES-CPP/tap-es/dev-status.svg)](https://david-dm.org/ES-CPP/tap-es#info=devDependencies)


Tap-ExtendScript is a utiliy wrapper arround [estktap](https://github.com/ExtendScript/estktap) and [tap-markdown](https://github.com/Hypercubed/tap-markdown). It creates a tape test bundler, generator and reporter that takes a test (or a set of tests) and pipes them to multiple app targets/versions. The results are saved to a single report.

## install

    npm install tap-es --save-dev


## adding and generating tests

With the `add` function we can generate a test for each script to each target, we can run the `add` function multiple times before evoking the `run` command.

The `add` function takes three arguments:

  1. __scripts__ `String`, `Array`: Path to ExtendScript test files
  2. __target__ `String`, `Array`: Adobe app targets and version
  3. __comparator__ `Number`, `String`, `Boolean` or `Function` [Optional, defaults to `true`]

Example using multiple files and multiple targets:

    // Generates 4 tests
    tap-es.add(['test1.jsx','test2.jsx'], [indesign-13,photoshop-18])

We can also pass [glob](https://github.com/isaacs/node-glob) strings:

    tap-es.add('./test/*.indd.jsx', [indesign-12,indesign-13] )

> Please read the [estktap guide](https://github.com/nbqx/estktap#readme) on how to set up test files.


## Running the tests

Now we have created the tests, run them and save output to markdown and console:

    tap-es.run( './result.md' )

> Running a test also resets tap-es
