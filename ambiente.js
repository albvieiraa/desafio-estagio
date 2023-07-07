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

// Desafio 3

// Desafio 4
let msg = "hello, how are you? i'm fine, thank you."
let palavras = msg.split(' ');
for (let i=0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1);
}
console.log(palavras.join(' '));

// Desafio 5
function palindrome(str){
    let len = str.length;
    for (let i=0; i<len/2; i++){
        if(str[i] !== str[len-1-i]) {
            return false;
        }
    }
    return true
}

console.log(palindrome('racecar'))