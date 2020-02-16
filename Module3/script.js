// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const entries = Object.entries(user);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
// console.log(`${key} = ${value}`)
// }

// ============================

// const countProps = function(obj) {
//   const keys = Object.keys(obj);
//   const total = keys.length
// console.log(total);
// };

// console.log(countProps({}));

// console.log(countProps({ name: 'Mango', age: 2 }));

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// ============================


// const findBestEmployee = function(obj) {
// const maxNum = Number(Math.max(...Object.values(obj)))
// // console.log(maxNum)
// for (const key in obj) {
//   if (maxNum === obj[key]) {
//     const element = key;
//     console.log(element)
//   }
// }
// };


// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// ============================

// const countTotalSalary = function(obj) {
// let total = 0;
// for (const key in obj) {
//   const num = obj[key]
//   total += num
// }
// console.log(total)
// };


// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

//============================

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
const array = [];
  for (const key in arr) {
   const element = arr[prop];
   array.push(element)
  }
  console.log(array)
  };

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); //[]