const container = document.querySelector('.container');
const list = container.querySelector('.list');
const removeLastBtn = container.querySelector('#remove-last');


removeLastBtn.addEventListener('click', function() {
  const items = list.querySelectorAll('.item');
  const lastItem = items[items.length - 1];
  list.removeChild(lastItem);
});


const deleteBtns = list.querySelectorAll('.delete');
deleteBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const listItem = btn.parentNode;
    list.removeChild(listItem);
  });
});