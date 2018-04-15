# Tests

- ✔ Tests [pass: 0, fail: 0, duration: 68ms]
- ✔ Summary [pass: 0, fail: 0, duration: 34ms]
- ✔ testing add() [pass: 4, fail: 0, duration: 3ms]
- ✖ testing CLI [pass: 0, fail: 1, duration: 6ms]
- ✔ should return Array of added test [pass: 5, fail: 0, duration: 1ms]
- ✖ testing glob paths [pass: 0, fail: 1, duration: 3ms]
- ✔ reset clears all tests [pass: 2, fail: 0, duration: 0ms]
- ✖ should run all tests and create report [pass: 0, fail: 1, duration: 13ms]

# Summary

- duration: 128ms
- planned: 14
- assertions: 14
- pass: 11
- fail: 3

# Fails

## testing CLI

    ✖ To do
    operator: fail
    at: Test.<anonymous> (/Users/Bruno/repos/tap-es/test/cli.test.js:7:5)
    stack: |-

## testing glob paths

    ✖ should be equal
    operator: equal
    expected: 'test/fixtures/es_test.jsx'
    actual:   'test/fixtures/*.jsx'
    at: Test.<anonymous> (/Users/Bruno/repos/tap-es/test/glob.test.js:8:5)
    stack: |-

## should run all tests and create report

    ✖ Needs to be implemented: ./test/report.md
    operator: fail
    at: Test.<anonymous> (/Users/Bruno/repos/tap-es/test/run.test.js:8:5)
    stack: |-

## Summary

- duration: 0ms
- planned: Error: NA (plans must appear once in output)
- assertions: 0
- pass: 0
- fail: 0

