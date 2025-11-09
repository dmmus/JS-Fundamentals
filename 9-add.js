const args = process.argv.slice(2); // récupère les arguments
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

function add(a, b) {
  return a + b;
}

console.log(add(num1, num2));