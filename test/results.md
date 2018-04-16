# Tests

- ✔ Tests [pass: 0, fail: 0, duration: 2.8s]
- ✔ Summary [pass: 0, fail: 0, duration: 1ms]
- ✔ Fails [pass: 0, fail: 0, duration: 60ms]
- ✔ testing add() [pass: 4, fail: 0, duration: 6ms]
- ✖ testing CLI [pass: 0, fail: 1, duration: 8ms]
- ✔ should return Array of added test [pass: 5, fail: 0, duration: 7ms]
- ✖ testing glob paths [pass: 0, fail: 1, duration: 9ms]
- ✔ reset clears all tests [pass: 2, fail: 0, duration: 1ms]
- ✖ should run all tests and create report [pass: 0, fail: 1, duration: 29ms]

# Summary

- duration: 2.9s
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

# Comments

## Tests

- ✔ Darwin indesign-12 es_test [pass: 0, fail: 0, duration: 1ms]
- ✔ Darwin indesign-13 es_test [pass: 0, fail: 0, duration: 1ms]
- ✖ Darwin indesign-13 es_test [pass: 0, fail: 1, duration: 1.8s]
- ✖ Darwin indesign-13 es_test [pass: 0, fail: 1, duration: 951ms]

## Summary

- duration: 2.7s
- planned: Error: NA (plans must appear once in output)
- assertions: 2
- pass: 0
- fail: 2

## Fails

## Darwin indesign-13 es_test
    ✖ Darwin indesign-13 es_test
    operator: equal
    expected: true
    actual:   { x: 0, y: 0, width: 3000, height: 5000 }
    at: maybeClose (internal/child_process.js:936:16)
    ✖ Darwin indesign-13 es_test
    operator: equal
    expected: true
    actual:   { x: 0, y: 0, width: 3000, height: 5000 }
    at: maybeClose (internal/child_process.js:936:16)

