//takes an array in the 1st parameter and the rest will be a REST parameter 
const removeFromArray = function(arr1, ...restArg) {

    for( let i = 0; i < restArg.length; i++){

        let tempArr = arr1.indexOf(restArg[i])

        if(arr1[tempArr] === restArg[i])
            arr1.splice(arr1.indexOf(restArg[i]),1);
    }
    return arr1;

};

// Do not edit below this line
module.exports = removeFromArray;

//answer from TOP
/*
const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };*/
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // var removeFromArray = function(...args) {
  //   const array = args[0]
  //   return array.filter(val => !args.includes(val))
  // }
  //
