let myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array, dato1, dato2) {
  [array[dato1], array[dato2]] = [array[dato2], array[dato1]];
  return array;
}

swap(myArray, 1, 2);
console.log(myArray)
