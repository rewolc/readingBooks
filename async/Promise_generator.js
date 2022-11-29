function foo(x, y) {
  return Promise.resolve(x + y);
}

function* main() {
  try {
    var text = yield foo(11, 31);
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}

var it = main();
var p = it.next().value;
console.log(p);
// ожидать разрешения обещания `p`
p.then(
  function (text) {
    it.next(text);
  },
  function (err) {
    it.throw(err);
  }
);
