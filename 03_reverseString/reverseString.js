const reverseString = function(word) {
    let charToAppend = "";
    for (let i = word.length-1; i >= 0; i--){
        charToAppend += word.charAt(i);
    }

    return charToAppend;
};

// Do not edit below this line
module.exports = reverseString;
