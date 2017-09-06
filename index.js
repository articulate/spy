const Spy = () => {
  const spy = function(...args) {
    spy.calls.push(args)
    return this
  }

  spy.calls = []
  spy.reset = () => spy.calls.length = 0

  return spy
}

module.exports = Spy
