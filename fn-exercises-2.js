// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x > y) return x;
    else return y;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (x > y && x > z) return x;
    else if (y > x && y > z) return y;
    else return z;
}

function maxOfThreeV2(x, y, z){
    var max = null;
    if (x > max) max = x;
    if (y > max) max = y;
    if (z > max) max = z;
    return max;
}

function maxOfThreeV3(x, y, z){ return Math.max(x, y, z); }

function maxOfThreeV4(x, y, z){
    var items = [x, y, z], max = null;
    for (var i = 0; i < items.length; i++) {
        if (items[i] > max) max = items[i];
    };
    return max;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    char = char.toLowerCase();
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') return true;
    else return false;
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
    var newPhrase = '';
    for (var i = 0; i < phrase.length; i++) {
        var char = phrase[i];
        if (!isVowel(char) && char != ' ' && char != '.')
            newPhrase += char + 'o' + char;
        else newPhrase += char;
    };
    return newPhrase;
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    var inverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
        inverse += str[i];
    };
    return inverse;
}
