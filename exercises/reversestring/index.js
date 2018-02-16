// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let strArray = str.split('');
//     let strLenght = strArray.length - 1;
//     for(let i =0; i < str.length / 2; i++) {
//         let temp = strArray[i];
//         strArray[i] = strArray[strLenght - i];
//         strArray[strLenght - i] = temp;
//     }
//     return strArray.join('');
// }

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('')
// }

// function reverse(str) {
//     let reversed = '';
//
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//
//     return reversed;
// }

function reverse(str) {
    debugger;
    return str
        .split('')
        .reduce((reversed, character) =>
             character + reversed
        , '')
}

reverse('abcd');


module.exports = reverse;
