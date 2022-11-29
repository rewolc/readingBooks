//Как вообще работает async/await
// async создает Промис, а await ждет его выполнения

const foo = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      resolve(2);
    }, 1000);
  });

  console.log(2);
};

foo();
