// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const isAlphabet = (character) => (/[a-zA-Z]/).test(character);

function capitalize(str) {
    let capitalizedString = '';
    if (isAlphabet(str[0])) capitalizedString += str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (isAlphabet(str[i]) && !isAlphabet(str[i - 1])) {
            capitalizedString += str[i].toUpperCase();
        } else {
            capitalizedString += str[i];
        } 

    }
    return capitalizedString;
}
console.log(capitalize('look, it is working!'))

module.exports = capitalize;
