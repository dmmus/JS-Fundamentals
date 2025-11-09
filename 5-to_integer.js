const args = process.argv.slice(2); // récupérer les arguments
const num = parseInt(args[0]);      // convertir le premier argument en entier

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}