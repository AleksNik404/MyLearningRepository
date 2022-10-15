const dring = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number]; // Good way to anotation
const sprite: Drink = ['clear', true, 60];
