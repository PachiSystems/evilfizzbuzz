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

  it ("accepts array of numbers", function () {
    outputToStdOut([1,2,3]);
    expect(consoleOutput).toEqual(["1,2,3"])
  })

  it ("handle array of strings", function () {
    outputToStdOut(["foo","bar","baz"]);
    expect(consoleOutput).toEqual(["foo,bar,baz"])
  })

  it ("handle array of strings and numbers", function () {
    outputToStdOut(["foo","bar","baz", 1,2,3]);
    expect(consoleOutput).toEqual(["foo,bar,baz,1,2,3"])
  })

  afterEach(() => {
    console.log = realConsoleLog;
  });
});
