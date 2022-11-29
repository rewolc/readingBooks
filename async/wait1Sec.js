//Написать ф-ю, при вызове которой код прерывается на 1 секунду

const wait1Sec = async () => {
  const a = new Date().getTime();

  while (new Date().getTime() - a < 1000) {}
};

console.log(1);
console.log(2);
wait1Sec();
console.log(3);
