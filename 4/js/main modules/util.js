// Функция для получения случайного целого числа из переданного диапазона включительно.
function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//функция для получения массива случайной длины с возможностью повторения элементов.
function getNewRandomArray(arr) {
  const newRandomArray = [];
  for (let i = 0; i <= getRandomNumber(0, 10); i++) {
    newRandomArray.push(arr[getRandomNumber(0, arr.length - 1)]);
  }
  return newRandomArray;
}

// Функция взята из интернета и доработана.
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomLocationPart(a, b, digits = 5 )
{
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

// Функция для получения случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// Функция для получения значений latitude и longitude.
function getRandomLocation() {
  return { lat: getRandomLocationPart(35.65000, 35.70000, 5), lng: getRandomLocationPart(139.70000, 139.80000, 5) };
}

export {getRandomNumber};
export {getNewRandomArray};
export {getRandomArrayElement};
export {getRandomLocation};
