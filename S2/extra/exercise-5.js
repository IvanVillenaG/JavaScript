function rollDice(numCaras) {
  return Math.floor(Math.random() * numCaras) + 1;
}

console.log(rollDice(10));