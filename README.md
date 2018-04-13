# tap-es

Tap-extendscript is a utiliy wrapper arround [estktap](https://github.com/ExtendScript/estktap) and [tap-markdown](https://github.com/Hypercubed/tap-markdown).

## goals

  - Run multiple tests targeting multiple apps and versions
  - Generate a single mark-down report

## usage

### CLI

    tap-es -s ./script.jsx -o ./report.md indesign-13 photoshop-18

### As a module

    require(tap-es)
    
    tap-es.addTest({
    	scriptPaths: [pathToScript1.jsx,pathToScript2.jsx],
    	targets: [indesign-12, photoshop-18],
    	comparitor: true,
    	reportPath: pathToReport.md
    })
    
    tap-es.run()


Please read the [estktap guide](https://github.com/nbqx/estktap#readme) on how to set up tests.
