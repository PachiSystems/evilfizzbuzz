const { outputToStdOut } = require('../output')

let realConsoleLog = console.log;
let consoleOutput = [];

describe("output", () => {
  beforeEach(() => {
    realConsoleLog = console.log;
    consoleOutput = [];
    console.log = (text) => consoleOutput.push(text);
  });

  it("accepts no args", function() {
    outputToStdOut();
    expect(consoleOutput).toEqual([undefined])
  });

  it("accepts a single argument", function() {
    outputToStdOut('foo');
    expect(consoleOutput).toEqual(['foo'])
  });

  it("outputs correctly when called twice", function () {
    outputToStdOut('bar');
    outputToStdOut('baz');
    expect(consoleOutput).toEqual(['bar','baz'])
  })

  afterEach(() => {
    console.log = realConsoleLog;
  });
});
