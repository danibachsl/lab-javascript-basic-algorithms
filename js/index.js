// Iteration 1: Names and Input
let hacker1 = 'Carlos';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Aitor';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let longestName = '';

if (hacker1.length > hacker2.length) {
    longestName = hacker1;
} else if (hacker1.length < hacker2.length) {
    longestName = hacker2;
} else {
    longestName = '';
}

console.log(`The driver has the longest name, it has ${longestName.length} characters.`);
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let upperCased = hacker1.toUpperCase();
let finalPhrase = ''; 

for (let i = 0; i <= upperCased.length - 1; i++) {
    finalPhrase += upperCased[i] + ' ';
}

finalPhrase = finalPhrase.slice(0, -1);
console.log(finalPhrase);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

for (let i = hacker1.length - 1; i >= 0; i--) {
    finalPhrase += hacker1[i];
}

console.log(finalPhrase);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if ((hacker1.localeCompare(hacker2)) === 1) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`Yo, the navigator goes first definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
}

//