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

// BONUS TIME!
// Bonus 1

let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at facilisis nunc. Vestibulum sed est in dui lacinia condimentum sit amet tempus leo. Nulla sit amet semper justo, at ullamcorper sapien. Cras fringilla bibendum finibus. Ut vel sollicitudin dolor. Aenean elit erat, iaculis ac mattis eget, ultricies at nibh. Nullam sed accumsan velit, at consequat nisi. Sed scelerisque commodo neque nec hendrerit. /nIn vitae porta leo. Cras pulvinar et neque ac imperdiet. Vivamus consectetur pretium lacus. Vivamus eget mattis mauris. Praesent pellentesque tristique pharetra. Praesent vulputate blandit tortor, at tincidunt justo varius et. Ut ut lectus dui. In quam turpis, pellentesque ut urna sed, mollis tincidunt est. Mauris accumsan lectus massa, nec sodales ante dapibus vel. Quisque enim diam, hendrerit in tristique sed, dignissim in arcu. Maecenas vulputate gravida rhoncus. Pellentesque rutrum diam quis eros tempor interdum. Curabitur id est porta, feugiat quam in, mollis nisi. Suspendisse vehicula ex sit amet gravida imperdiet. Morbi viverra ut turpis vel finibus. Curabitur quis cursus neque, ac consectetur est. /nCras ut est id quam finibus posuere non at est. Vestibulum nec ipsum a ante molestie pellentesque vitae ac sem. Curabitur vel urna tincidunt, blandit lorem id, iaculis orci. Maecenas ullamcorper vulputate metus, et pulvinar tortor scelerisque vitae. Duis quis condimentum magna, at malesuada urna. Suspendisse potenti. Mauris pretium condimentum nibh, non scelerisque nibh dictum nec. Nulla eleifend eleifend semper.';

function WordCount(str) { 
    return str.split(" ").length;
}

console.log(WordCount(paragraph));

// Bonus 2

let phraseToCheck = 'Amor, Roma';

