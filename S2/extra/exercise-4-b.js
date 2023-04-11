let myArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

function removeItem(array, text) {
  let remove = findArrayIndex(array, text);
  if (remove !== -1) {
    array.splice(remove, 1);
  }
  return array;
}

removeItem(array, 'Salamandra');
console.log(array);