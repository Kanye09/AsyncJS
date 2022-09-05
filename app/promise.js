const stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const isShopOpen = true;

const order = (work, time) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log(`Sorry, shop is closed!`));
    }
  });
};

order(() => console.log(`${stocks.fruits[0]} was selected`), 2000)
  .then(() => {
    return order(() => console.log(`Production has started`), 0000);
  })
  .then(() => {
    return order(
      () =>
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`),
      1000
    );
  })
  .then(() => {
    return order(() => console.log(`The machine has started!`), 1000);
  })
  .then(() => {
    return order(
      () => console.log(`Ice cream pleced on ${stocks.holders[0]}`),
      2000
    );
  })
  .then(() => {
    return order(
      () => console.log(`${stocks.toppings[0]} added on top of it`),
      3000
    );
  })
  .then(() => {
    return order(() => console.log(`Serve ice cream!`), 2000);
  })
  .catch(() => {
    console.log(`We are sorry, no more ice cream!`);
  })
  .finally(() => {
    console.log(`We are closing, thanks for visiting!`);
  });
