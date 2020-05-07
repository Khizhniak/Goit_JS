const countTotalSalary = function(obj) {
let total = 0;
for (const key in obj) {
  const num = obj[key]
  total += num
}
console.log(total)
};


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400