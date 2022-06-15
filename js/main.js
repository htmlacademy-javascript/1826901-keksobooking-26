const offers = [];

for (let i = 1; i <= 10; i++) {
  const rooms = getRandomNumber(1, 6);
  const location = getRandomLocation();


  const offer = {
    author: {
      avatar: `img/avatars/user${i}.png`,
    },

    location,

    offer: {
      title: getRandomTitle(),
      description: 'Гостиница содержит много комфортабельных номеров!',
      price: getRandomPositiveNumber(200, 500),
      type: getRandomType(),
      rooms: getRandomPositiveNumber(1, 6),
      guests: rooms * getRandomNumber(1, 2),
      checkin: getRandomChek(),
      checkout: getRandomChek(),
      features: getRandomFeatures(),
      address: `${location.lat} , ${location.lng}`,
    },
  };

  offers.push(offer);
}

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomTitle() {
  const titles = ['Выгодное предложение!', 'Последний щанс!', 'Title3', 'Title4'];

  const randomIndex = getRandomNumber(0, titles.length - 1);

  return titles[randomIndex];
}

function getRandomType() {
  const types = ['Hotel ', 'Motel','B&B','Guest house','Extended Stay Hotel'];

  const randomIndex = getRandomNumber(0, types.length - 1);

  return types[randomIndex];
}

function getRandomFeatures() {
  const features = ['wifi', 'parking', 'dishwasher', 'waher', 'elevator', 'conditioner'];

  const randomIndex = getRandomNumber(0, features.length - 1);

  return features.slice(0, randomIndex);
}

function getRandomLocationPart(a, b, digits = 5 )
{
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomPositiveNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomChek() {
  const titles = ['12:00', '13:00', '14:00'];

  const randomIndex = getRandomNumber(0, titles.length - 1);

  return titles[randomIndex];
}

function getRandomLocation() {
  return { lat: getRandomLocationPart(35.65000, 35.70000, 5), lng: getRandomLocationPart(139.70000, 139.80000, 5) };
}
