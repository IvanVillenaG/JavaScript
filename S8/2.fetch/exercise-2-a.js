const baseUrl = 'https://api.nationalize.io?name=';

const search = document.querySelector('.search');
const name = document.querySelector('.name');

search.addEventListener('click', () =>{
    const url = baseUrl + name.value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});




