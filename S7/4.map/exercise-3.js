const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const visitedCities = cities.map(city => {
  if(city.isVisited === "true" ) {
    return { ...city, name: `${city.name} (Visitado)` };
  } else {
    return city;
  }
}).map(city => city.name);

console.log(visitedCities);