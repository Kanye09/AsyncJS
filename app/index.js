let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquids: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const order = (fruitName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitName]} was selected`);
    callProduction();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log(`production has started!`);

    setTimeout(() => {
      console.log(`The fruit has been chopped!`);

      setTimeout(() => {
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);

        setTimeout(() => {
          console.log(`The machine has started!`);

          setTimeout(() => {
            console.log(`Ice cream pleced on ${stocks.holders[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} added on top of it`);

              setTimeout(() => {
                console.log(`serve ice cream!`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  });
};

order(0, production);
