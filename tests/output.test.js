const { output } = require('../output')

let realConsoleLog = console.log;
let consoleOutput = [];

describe("output", () => {
  beforeEach(() => {
    realConsoleLog = console.log;
    consoleOutput = [];
    console.log = (text) => consoleOutput.push(text);
  });

  it("accepts no args", async function() {

    output();
    expect(consoleOutput).toEqual([undefined])
  });

  afterEach(() => {
    console.log = realConsoleLog;
  });
});
