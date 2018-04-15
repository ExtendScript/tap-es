# tap-es

[![version](https://img.shields.io/npm/v/tap-es.svg)](https://www.npmjs.org/package/tap-es)
[![status](https://travis-ci.org/ES-CPP/tap-es.svg)](https://travis-ci.org/ES-CPP/tap-es)
[![dependencies](https://david-dm.org/ES-CPP/tap-es.svg)](https://david-dm.org/ES-CPP/tap-es)
[![devDependencies](https://david-dm.org/ES-CPP/tap-es/dev-status.svg)](https://david-dm.org/ES-CPP/tap-es#info=devDependencies)


Tap-ExtendScript is a utiliy wrapper arround [estktap](https://github.com/ExtendScript/estktap) and [tap-markdown](https://github.com/Hypercubed/tap-markdown) and [tape-catch](https://github.com/michaelrhodes/tape-catch). It creates a tape test bundler, generator and reporter that takes a test (or a set of tests) and pipes them to multiple app targets/versions. The results are saved to a single Markdown report.

## install

    npm install tap-es --save-dev

## use cli

This is handy for testing scripts using `npm run` inside your package.json

    tap-es -s ./test/*.jsx -o ./report.md indesign-13 photoshop-18

> Use `tape-es -h` for help


## use module

The module gives user control over the setup and bundling requirements.

### adding and generating tests

The `add` function is more powerfull then the CLI tool as besides generating a test for each script to each target, we can define which scripts link to which targets (and comparators) by running the `add` function multiple times before evoking the `run` command.

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


### Running the tests

Now we have created the tests, run them and save output to markdown and console:

    tap-es.run( './result.md' )

> Running a test also resets tap-es
