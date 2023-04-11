const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, callback){
    numbersList.push(callback(a, b));
}

father(1, 1, sum);
father(1, 1, substract);
father(10, 10, sum);
father(10, 5, substract);

console.log(numbersList);