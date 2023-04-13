const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    return (callback(description));
}

arrDescriptions = [
'S/N ¿Eres mayor de edad?',
'S/N ¿Eres Deportista?',
'S/N ¿Te gustan los videojuegos?',]

for (pregunta of arrDesciptions) {
   let respuesta = pregunta.startWith('S/N') 
    ? father(pregunta, confirmExample) 
    : father(pregunta, promptExample);
   userAnswers.push(respuesta);
};

console.log(userAnswers);
