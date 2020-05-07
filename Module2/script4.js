
const formatString = function(string) {
let smth = string.split("");

if(smth.length > 40){
do {
  smth.pop()
} while (smth.length > 40);
smth.push("...")
  return smth.join("")
} else {
 return string
}
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));