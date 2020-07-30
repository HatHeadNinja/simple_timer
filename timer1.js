// edge cases

// VALIDATE
// no numbers provided
// not negative
// not a number
let validated = false

//console.log(process.argv);
for (let i = 2; i < process.argv.length; i++) {
  let chkVal = parseInt(process.argv[i]);
  if (process.argv[i] !== '' || chkVal > 0 || typeof process.argv[i] === 'number') {
    validated = true;
  }
}

if (validated) {
  for (let index = 2; index < process.argv.length; index++) {
    const val = process.argv[index] * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, val);
  }
}

