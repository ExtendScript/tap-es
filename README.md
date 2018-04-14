# tap-es

Tap-ExtendScript is a utiliy wrapper arround [estktap](https://github.com/ExtendScript/estktap) and [tap-markdown](https://github.com/Hypercubed/tap-markdown). It creates a tape test bundler, generator and reporter that takes a test (or a set of tests) and pipes them to multiple app targets/versions. The results are saved to a single Markdown report.

## install

    npm install tap-es --save-dev

## use cli

This is handy for testing scripts using `npm run` inside your package.json

    tap-es -s ./test/*.jsx -o ./report.md indesign-13 photoshop-18

> Use `tape-es -h` for help


## use as module

Using as a module you have fine grain control over the setup and bundling of your tests.

### adding and generating tests

The `add` function is a powerfull tool that generates a test for each script to each target. When we need more fine control to define which scripts target specific comparators we can run the generator multiple times with different settings before evoking the `run` command.

The `add` function takes three arguments:

  1. __test__ `String`, `Array`: Path to script files to test
  2. __target__ `String`, `Array`: Adobe app targets and version
  3. __comparator__ `Number`, `String`, `Boolean` or `Function` [Optional, defaults to `true`]

Example using multiple files and multiple targets:

    // Generates 6 tests
    tap-es.add(['test1.jsx','test2.jsx'], [indesign-12,indesign-13,photoshop-18])

We can also pass [glob](https://github.com/isaacs/node-glob) strings:

    tap-es.add('./test/*.jsx', [indesign-12,indesign-13] )

> Please read the [estktap guide](https://github.com/nbqx/estktap#readme) on how to set up test files.


### Running the tests

Now we have created the tests, run them and save output to markdown and console:

    tap-es.run( './result.md' )

> Running a test also resets tap-es
