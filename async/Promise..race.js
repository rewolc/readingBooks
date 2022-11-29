const a = Promise.resolve(1);
const b = 2;
const c = new Promise((res) => setTimeout(() => res(3), 1000));
// const d = new Promise((_, reject) => reject("error"));

const PromisesArr = [a, b, c];

const PromiseRaceFunc = (arr) => {
  return new Promise((res, rej) => {
    let result = null;
    arr.map((el) => {
      Promise.resolve(el).then((data) => {
        if (!result) result = data;
        if (result) res(result);
      }, rej);
    });
  });
};

Promise.race(PromisesArr).then(console.log, console.log);
PromiseRaceFunc(PromisesArr).then(console.log, console.log);
