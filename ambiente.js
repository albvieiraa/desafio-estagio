// DESAFIO DE MANIPULAÇÃO DE STRINGS
//Desafio 1
let nomes = 'Hello, World! OpenAI is amazing.';
let splitString = nomes.split(' ');
let reverseArray = splitString.reverse();
let joinArray = reverseArray.join (' ');
console.log(joinArray);

//Desafio 2
let frase = 'Hello, World!';
let set = new Set(frase);
let fraseSemDuplicados = Array.from(set);
let joinFrase = fraseSemDuplicados.join(' ');
console.log(joinFrase);