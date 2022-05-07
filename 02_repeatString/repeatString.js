const repeatString = function(word, num) {
    let finalWord = "";
    for (let i=0; i < num; i++){
        finalWord += word;
    }

    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
