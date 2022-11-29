const aPlusB = (a) => (b) => a + b;
const aPlusB2 = aPlusB(2);
console.log(aPlusB2(3));

// 6 6 6 6 6
//Т.к. у var функциональная область видимости, поэтому i всплывает и определяется в глоб. области.
//Сначала выполняется цикл, и, не найдя значения внутри, идет в глоб. область и находит там i = 6.

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// 1 2 3 4 5
//Т.к. у let блочная область видимости, поэтому j не всплывает и определяется в цикле.Поэтому значение замыкается и выводится по порядку.

for (let j = 1; j <= 5; j++) {
  setTimeout(function timer() {
    console.log(i);
  }, j * 1000);
}
