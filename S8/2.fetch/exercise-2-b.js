const baseUrl = 'https://api.nationalize.io?name=';

const search = document.querySelector('.search');
const name = document.querySelector('.name');
const results = document.querySelector('.results');

search.addEventListener('click', () =>{
    const url = baseUrl + name.value;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        results.innerHTML = '';
        data.country.forEach(countryData => {
            const {country_id, probability} = countryData;
            const p = document.createElement('p');
            p.textContent = `el nombre ${name.value} tiene un ${probability}% de ser de ${country_id}.`;
            results.appendChild(p);
            console.log(p);
        });
    });
});
