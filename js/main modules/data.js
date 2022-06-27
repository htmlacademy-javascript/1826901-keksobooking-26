import {getRandomNumber} from './util.js';
import {getNewRandomArray} from './util.js';
import {getRandomLocation} from './util.js';
import {getRandomArrayElement} from './util.js';

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

export {generateOffers};
