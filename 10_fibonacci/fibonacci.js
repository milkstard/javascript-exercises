const fibonacci = function(num1) {
    let previousFibo = 0;
    let currentFibo = 1;
    let nextFibo = 0;
        
    if(!Number.isInteger(num1)){
        num1 = parseInt(num1);
    }

    for( let i = 1; i <= num1; i++){
        nextFibo = previousFibo + currentFibo;
        previousFibo = currentFibo;
        currentFibo = nextFibo;
    }
    
    return previousFibo;
};

// Do not edit below this line
module.exports = fibonacci;
