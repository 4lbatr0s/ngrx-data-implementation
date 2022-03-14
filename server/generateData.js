const faker = require('faker');
const fs = require('fs')
const database = { persons: []};

for (let i = 1; i<= 300; i++) {
  database.persons.push({
    id: i,
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address:`${faker.address.zipCode('#####')}`,
    phone: faker.phone.phoneNumber()
  });
}

fs.writeFileSync('database.json', JSON.stringify(database))
console.log(JSON.stringify(database));