const p = new Promise((resolve, reject) => resolve(3));

p.then(function () {
  p.then(function () {
    console.log("C");
  });
  console.log("A");
});
p.then(function () {
  console.log("B");
});
// A, B, C;
