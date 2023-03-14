const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

users.forEach(() => {
  if (users.years < 18) {
    console.log(users.name + ": " + "Usuario menor de edad");
  } else {
    console.log(users.name + ": " + "Usuario mayor de edad");
  }
});