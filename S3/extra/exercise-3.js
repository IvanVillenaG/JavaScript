const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

    const ul = document.createElement('ul');
    const printHere = document.querySelector('[data-function="printHere"]');

    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        ul.appendChild(li);
    });

    printHere.appendChild(ul);