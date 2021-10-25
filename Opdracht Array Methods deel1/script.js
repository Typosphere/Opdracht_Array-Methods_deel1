// Opdracht Array methods - deel 1

// A
const addTheWordCool = function(array){
    // add your code
    array.push("cool");
    return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B

const amountOfElementsInArray = function(array) {
    return array.length;
  };
  console.log(amountOfElementsInArray(["appels", "peren", "citroenen"])); // 3


// C
  
const selectBelgiumFromBenelux = function(array) {
  return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 


// D

const lastElementInArray = function(array){
  return array[3];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"


// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(array) {
  const newArray = array.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
  return newArray;
};

const impeachTrumpSplice = function(array) {
  const removedElement = array.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F

const stringsTogether = function(array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"


// G

const combineArrays = function(array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));
// result should be [1,2,3,4,5,6]
