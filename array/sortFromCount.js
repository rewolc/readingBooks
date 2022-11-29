//Задача :
// Написать функцию, которая принимает массив чисел и возвращает массив чисел, отсортированный по убыванию количества повторений чисел в массиве.

const sortFromCount = (arr) => {
  const getNumCount = (num) => arr.filter((el) => el === num).length;

  const unicNumbersArr = [...new Set(arr)];

  return unicNumbersArr.sort((a, b) => getNumCount(b) - getNumCount(a));
};

const arrToSort = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

console.log(sortFromCount(arrToSort));
