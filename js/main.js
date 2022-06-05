function getRandomNumber(min, max,maxDigits)
{
  if (min > max || min < 0 || max <= 0)
  {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }
  let digitsDegree = 10 ** maxDigits;
    return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
<!--Функцию взял с https://qna.habr.com/q/999157-->
