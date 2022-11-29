function* foo() {
  console.log("`*foo()` starting");
  yield console.log(3);
  yield console.log(4);
  console.log("`*foo()` finished");
}

function* bar() {
  yield console.log(1);
  yield console.log(2);
  yield* foo(); // `yield`-делегирование!
  yield console.log(5);
}

var it = bar();
it.next().value; // 1
it.next().value; // 2
it.next().value; // `*foo()` запускается
// 3
it.next().value; // 4
it.next().value; // `*foo()` завершается
// 5
