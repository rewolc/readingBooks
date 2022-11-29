function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      return function (...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
console.log(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
console.log(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов
