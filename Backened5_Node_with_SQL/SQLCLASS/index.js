//! faker is used to create fake data
 const { faker } = require('@faker-js/faker');

 const getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  }

  console.log(getRandomUser());