// Array
let color: string[] = ['red', 'green', 'blue'];

// Class
class Car2 {
  //
}
let car: Car2 = new Car2();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
//// 1) Function that returns the `any` type

const json = '{"x":10, "y":20}';
// const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//// 2) Когда объявление и иницилизация по разным строчкам.
let words = ['red', 'green', 'blue'];
// let foundWord;
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

//// 3) Когда мы хотим, чтобы переменная имела тип, который не может быть определен.
let numbers = [-10, -1, 12];
// let numberAboveZero = false;
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
