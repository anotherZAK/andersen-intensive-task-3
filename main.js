'use strict';

/**
 * Реализует встроенный метод filter для массивов
 * @param {*} callback - функция, которая будет вызвана для каждого элемента массива
 * @returns {Array} - новый  массив, содержащий значения, которые прошли отбор
 */
Array.prototype.myFilter = function (callback) {

  if (this === null) {
    throw new TypeError();
  }

  const presentArray = this;
  const presentArrayLength = presentArray.length;
  const thisArg = arguments.length >= 2 ? arguments[1] : undefined;

  if (typeof callback !== 'function') {
    throw new TypeError();
  }

  let resultArray = [];
  for (let i = 0; i < presentArrayLength; i++) {
    if (i in presentArray) {
      let value = presentArray[i];
      if (callback.call(thisArg, value, i, presentArray)) {
        resultArray.push(value);
      }
    }
  }

  return resultArray;
};

/**
 * Вызывает переданную функцию с задержкой на время timeDelay, мс
 */
const createDebounceFunction = function (callback, timeDelay) {
  let timeout = null;
  return function () {
    timeout = setTimeout(callback, timeDelay);
  }
}
