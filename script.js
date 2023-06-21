
function letterCombinations(input_digit) {
  // Mapping of digit to letters
  const digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '0': '0',
    '1': '1'
  };

  // Base case: if the input is an empty string, return an empty array
  if (input_digit === '') {
    return [];
  }

  // Recursive case: generate letter combinations
  const combinations = [];

  // Recursive function to generate combinations
  function generateCombinations(currentIndex, currentCombination) {
    if (currentIndex === input_digit.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = input_digit[currentIndex];
    const letters = digitMap[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      generateCombinations(currentIndex + 1, currentCombination + letter);
    }
  }

  generateCombinations(0, '');

  return combinations;
}

module.exports = letterCombinations;