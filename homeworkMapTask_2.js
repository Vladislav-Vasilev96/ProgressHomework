// TASK: from 'cities' array generate a new array 'bgCityNames' which will contain only the names
// of the cities, but mapped to their Bulgarian equivalent

let dict = {
  'Sofia' : 'София',
  'Plovdiv' : 'Пловдив',
  'Burgas' : 'Бургас',
  'Varna' : 'Варна'
}
let cities = [
      {name: 'Sofia', population: 1_236_000},
      {name: 'Plovdiv', population: 343_424 },
      {name: 'Burgas', population: 202_766},
      {name: 'Varna', population: 335_177},
];

// YOUR CODE HERE:
bgCityNames=cities.map(x=>dict[x.name]
  
    
  
)

// TEST:
console.log(bgCityNames);

// EXPECTED OUTPUT:
// [ 'София', 'Пловдив', 'Бургас', 'Варна' ]