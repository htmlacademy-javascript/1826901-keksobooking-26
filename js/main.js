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


// Функция для создания массива из сгенерированных JS-объектов.
function generateOffers() {
  const offers = [];

  for (let i = 1; i <= 10; i++) {
    const features = ['wifi', 'parking', 'dishwasher', 'washer', 'elevator', 'conditioner'];
    const titles = ['Выгодное предложение!', 'Последний щанс!', 'Title3', 'Title4'];
    const time = ['12:00', '13:00', '14:00'];
    const types = ['Hotel ', 'Motel', 'B&B', 'Guest house', 'Extended Stay Hotel'];
    const photos = [
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
    ];
    const rooms = getRandomNumber(1, 6);
    const location = getRandomLocation();

    const offer = {
      author: {
        avatar: `img/avatars/user${i}.png`,
      },

      location,

      offer: {
        title: getRandomArrayElement(titles),
        address: `${location.lat} , ${location.lng}`,
        price: getRandomNumber(200, 500),
        type: getRandomArrayElement(types),
        rooms: getRandomNumber(1, 6),
        guests: rooms * getRandomNumber(1, 2),
        checkin: getRandomArrayElement(time),
        checkout: getRandomArrayElement(time),
        features: getNewRandomArray(features),
        description: 'Гостиница содержит много комфортабельных номеров!',
        photos: getNewRandomArray(photos),
      },

    };

    offers.push(offer);
  }
  return offers;
}
generateOffers();
