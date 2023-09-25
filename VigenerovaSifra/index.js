const slugify = require('slugify');
const fs = require('fs');
const alphabet = require('alphabet');

function generateVigenereSquare(alphabet) {
    const vigenereSquare = [];

    for (let i = 0; i < 26; i++) {
        const row = alphabet.slice(i) + alphabet.slice(0, i);
        vigenereSquare.push(row);
    }

    return vigenereSquare;
}

function vigenereCipher(plainText, key, square) {
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();
    let cipherText = '';

    for (let i = 0, j = 0; i < plainText.length; i++) {
        const char = plainText[i];
        if (char.match(/[A-Z]/)) {
            const rowIndex = square[0].indexOf(key[j % key.length]);
            const colIndex = square[0].indexOf(char);
            cipherText += square[rowIndex][colIndex];
            j++;
        } else {
            cipherText += char;
        }
    }

    return cipherText;
}

function vigenereDecipher(cipherText, key, square) {
    cipherText = cipherText.toUpperCase();
    key = key.toUpperCase();
    let plainText = '';

    for (let i = 0, j = 0; i < cipherText.length; i++) {
        const char = cipherText[i];
        if (char.match(/[A-Z]/)) {
            const rowIndex = square[0].indexOf(key[j % key.length]);
            const colIndex = square[rowIndex].indexOf(char);
            plainText += square[0][colIndex];
            j++;
        } else {
            plainText += char;
        }
    }

    return plainText;
}


function cipherFromFile(filePath) {
    const alpbahet = alphabet.upper.join("");
    let text = fs.readFileSync(filePath, 'utf-8');
    let [key, ...textToCipher] = text.split('\n');
    textToCipher = textToCipher.join('')

    const clearKey = slugify(key, "").toUpperCase();
    const clearText = slugify(textToCipher, "").toUpperCase();

    const square = generateVigenereSquare(alpbahet);
    const cipherText = vigenereCipher(clearText, clearKey, square);

    fs.writeFileSync('./ciphertext.txt', cipherText, 'utf-8');
}

function decipherFromFile(filePath) {
    const alpbahet = alphabet.upper.join("");
    let text = fs.readFileSync(filePath, 'utf-8');
    const [key, textToCipher] = text.split('\n');
    const clearKey = slugify(key, "").toUpperCase();
    const clearText = slugify(textToCipher, "").toUpperCase();

    const square = generateVigenereSquare(alpbahet);
    const plainText = vigenereDecipher(clearText, clearKey, square);

    fs.writeFileSync('./plaintext.txt', plainText, 'utf-8');
}

function main() {
    const args = process.argv.slice(2);
    const [command, filePath] = args;

    if (command === 'cipher') {
        cipherFromFile(filePath);
    } else if (command === 'decipher') {
        decipherFromFile(filePath);
    } else {
        console.log('Invalid command');
    }
}

main();