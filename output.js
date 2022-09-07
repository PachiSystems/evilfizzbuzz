function outputToStdOut(input) {
  if (typeof input == 'object' && input.length){
    console.log(input.join(','))
  } else {
    console.log(input)
  }
}

module.exports = {
  outputToStdOut
}
