function test(n) {
  if (test[n]) {
    console.log("cached");
    console.log(test[n]);

    return test[n];
  }
  test[n] = n * n * n;
  return n * n * n;
}

test(5000);
test(5000);
