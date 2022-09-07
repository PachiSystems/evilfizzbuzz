const fizzBuzz = (numbers) => {
  return numbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    }
    return number;
  });
};

module.exports = fizzBuzz;
