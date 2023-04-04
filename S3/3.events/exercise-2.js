let myInput$$ = document.querySelector('input');
myInput$$.addEventListener('focus', function(event) {
  console.log('El valor del input es:', event.target.value);
});