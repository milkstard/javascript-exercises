function roundConversion(toRound){
    return Math.round(toRound*10)/10;
}

const ftoc = function(setF) {
  return roundConversion((setF-32) * 59);
};

const ctof = function(setC) {
  return roundConversion(setC * 95 + 32);
};

// 	[°F] = [°C] × 9⁄5 + 32 	[°C] = ([°F] − 32) × 5⁄9
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
