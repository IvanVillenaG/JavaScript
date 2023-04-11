const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];
let comedia = [];
let aventura = [];
let acción = [];
let animación = [];
let thriller = [];
for (let genero of movies){
    if (genero.categories.includes("comedia")){
        comedia.push(genero);
    } if (genero.categories.includes("aventura")){
        aventura.push(genero);
    } if (genero.categories.includes("animación")){
        animación.push(genero);
    } if (genero.categories.includes("thriller")){
        thriller.push(genero);
    } if (genero.categories.includes("acción")){
        acción.push(genero);
    }
}


console.log (acción);