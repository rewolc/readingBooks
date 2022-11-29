const a = Promise.resolve(1);
const b = 2;
const c = new Promise((res) => setTimeout(() => res(3), 1000));

const PromisesArr = [a, b, c];

//Оборачиваем промис в новый промис. При .map в стек идет ассинхронное разрешение каждого промиса.Во время разрешения промисов как функция, так и новый промис ничего не возвращают
//Как только длина result === длине всех массива промисов, то через res возвращаем результат нового промиса и ф-ю

const promiseAllFunc = (arr) => {
  return new Promise((res, rej) => {
    const result = [];
    arr.map((el, indx) => {
      Promise.resolve(el).then((data) => {
        result[indx] = data;
        if (result.length === arr.length) {
          res(result);
        }
      }, rej);
    });
  });
};

const all = Promise.all([a, b, c]).then(console.log);
promiseAllFunc(PromisesArr).then(console.log);
