// let randString = 'Animal loots foliated detail of stool lamina.';

const palindromes = function (string) {
    // lowerCase and remove random symbols
    fixedString = string.toLowerCase().replace(/[^a-z]/g, '');

    return (
        fixedString
            //split
            .split('')
            // reverse
            .reverse()
            //combine and check against same string
            .join('') === fixedString
    );
};
// console.log(palindromes(randString));
// Do not edit below this line
module.exports = palindromes;
