const sumAll = function(startNum, endNum) {
    
    let total = 0;

    //check if it is an integer and not a negative integer
    if(Number.isInteger(startNum) && Number.isInteger(endNum) && startNum >=0 && endNum >= 0){
        let greaterNum = 0;
        let lesserNum = 0;

        //check for biggest number
        if(startNum > endNum){
            greaterNum = startNum;
            lesserNum = endNum;
        }else{
            greaterNum = endNum;
            lesserNum = startNum;
        }
        
        //loop to add
        for( let i = lesserNum; i <= greaterNum; i++){

            total += i;
        }

    } else { return "ERROR";}
    

    return total;
};

// Do not edit below this line
module.exports = sumAll;
