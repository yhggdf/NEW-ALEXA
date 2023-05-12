let guests = [
  {
    firstName: "Seander",
    lastName: "Sylvester",
    species: "Dogs",
  },

  {
    firstName: "Pierre",
    lastName: "Moses",
    species: "Lion",
  },

  {
    firstName: "Sage",
    lastName: "Maxwell",
    species: "Human",
  },

  {
    firstName: "Raymond",
    lastName: "Reddington",
    species: "Fox",
  },

  {
    firstName: "Ten People",
    lastName: "Is Plenty",
    species: "Bat",
  },

  {
    firstName: "March",
    lastName: "Hare",
    species: "Rabbit",
  },

  {
    firstName: "NoRats",
    lastName: "Allowed",
    species: "Cat",
  },

  {
    firstName: "Dell",
    lastName: "Debug",
    species: "Antelope",
  },

  {
    firstName: "Greg",
    lastName: "Thee",
    species: "Gorilla",
  },

  {
    firstName: "Izzy",
    lastName: "Ngannou",
    species: "Human",
  },
];

let teaPartyTable = {};

for (let i = 0; i < guests.length; i++) {
  let guest = guests[i];

  smallDessertOptions = [
    "Cheesecake",
    "Carrot Cake",
    "Apple Pie",
    "Banana Bread",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Rice Pudding",
    "Tiramisu",
    "Fruit Salad",
  ];

  smallDessert =
    smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];

  teaGuest = {};

  teaGuest.firstName = guest.firstName;

  teaGuest.lastName = guest.lastName;

  teaGuest.species = guest.species;

  teaGuest.teaCup = true;

  teaGuest.teaPlate = true;

  teaGuest.smallDessert = `${smallDessert}`;

  teaPartyTable[guest.firstName] = teaGuest;
}

for (let guest in teaPartyTable) {
  console.log(`First Name: ${teaPartyTable[guest].firstName}`);

  console.log(`Last Name: ${teaPartyTable[guest].lastName}`);

  console.log(`Species: ${teaPartyTable[guest].species}`);

  console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);

  console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);

  console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);

  console.log();
}
