# API

- [Creating spies](#creating-spies)
- [Resetting spies](#resetting-spies)
- [Testing with spies](#testing-with-spies)

## Creating spies

```js
const spy = require('@articulate/spy')

// You can create individual spies.
const foo = spy()

foo('abc', 123)
foo.calls[0] //=> ['abc', 123]

// Or you can attach spies to objects to make mocks.
const mock = {
  foo: spy(),
  bar: spy(),
  baz: spy()
}

mock.foo(1).bar(2).baz(3)

mock.foo.calls[0] //=> [1]
mock.bar.calls[0] //=> [2]
mock.baz.calls[0] //=> [3]
```

## Resetting spies

```js
const spy = require('@articulate/spy')

const foo = spy()

// Reset a spy to clear the call history.
foo('bar')
foo.calls.length //=> 1

foo.reset()
foo.calls.length //=> 0
```

## Testing with spies

**Note:** The example below uses `mocha` and `chai`, but `@articulate/spy` works well with any framework.

```js
const { expect } = require('chai')
const spy        = require('@articulate/spy')

const map = (f, list) =>
  list.map(f)

describe('map', () => {
  const list = [1, 2, 3]
  const foo  = spy()

  beforeEach(() =>
    map(foo, list)
  )

  afterEach(() => {
    foo.reset()
  })

  it('maps a function over a list', () => {
    expect(foo.calls.length).to.equal(3)
    expect(foo.calls[0]).to.eql([1])
    expect(foo.calls[1]).to.eql([2])
    expect(foo.calls[2]).to.eql([3])
  })
})
```
