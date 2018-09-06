//
// Object Destructuring
//

// const person = {
//   // name: 'Lebron',
//   age: 22,
//   location: {
//     city: 'Barcelona',
//     temp: 92
//   }
// };

// const { name: firstName = 'Mike', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

//
// Array Destructuring
//

const address = ['221B Baker Street', 'London', 'England', '10001'];
const [, city, country = "Russia"] = address;
console.log(`You are in ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);