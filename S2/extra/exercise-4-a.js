let myArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}


console.log(findArrayIndex(myArray, "Ajolote"));
console.log(findArrayIndex(myArray, "Salmón"));
console.log(findArrayIndex(myArray, 'Mosquito'));