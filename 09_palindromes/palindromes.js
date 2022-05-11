const palindromes = function (x) {
    //remove whitespace
    let wsRemove = x.replace(/\s/g, '');
    //remove non-alphanumeric
    let naRemove = wsRemove.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    //let finalResult = naRemove.split('').reverse().join("").localeCompare(naRemove);
    return (!naRemove.split('').reverse().join("").localeCompare(naRemove));

};

// Do not edit below this line
module.exports = palindromes;
