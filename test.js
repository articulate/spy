const { expect } = require('chai')

const spy = require('.')

describe('spy', () => {
  let foo

  beforeEach(() => {
    foo = spy()
    foo('abc', 123)
  })

  it('keeps track of function calls', () =>
    expect(foo.calls[0]).to.eql(['abc', 123])
  )

  describe('when reset', () => {
    beforeEach(() =>
      foo.reset()
    )

    it('clears the call history', () =>
      expect(foo.calls.length).to.equal(0)
    )
  })
})
