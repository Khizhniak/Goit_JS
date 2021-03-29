const checkForSpam = function (str) {
  const checkWords = ["sale", "spam"]
  return checkWords.some(x => str.toLowerCase().includes(x));
};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
