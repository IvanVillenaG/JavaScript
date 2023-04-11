const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

father('¿Como te llamas?', promptExample);
father(userAnwsers + " ¿es es tú nombre?", confirmExample);

console.log(userAnwsers);

