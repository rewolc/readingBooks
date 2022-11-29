function* something() {
  try {
    var nextVal;
    while (true) {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      yield nextVal;
    }
  } finally {
    // завершающая секция
    console.log("cleaning up!");
  }
}

var it = something();
for (var v of it) {
  console.log(v);
  // цикл не должен работать бесконечно!
  if (v > 500) {
    console.log(
      // завершить итератор генератора
      it.return("Hello World").value
    );
    // команда `break` здесь не нужна
  }
}

// 1 9 33 105 321 969
// cleaning up!
// Hello World
