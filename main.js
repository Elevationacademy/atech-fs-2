function bakeCake() {
    console.log("Starting the cake baking process...");
  
    console.log("Preparing cake batter...");
    console.log(`Measuring flour cups of 1`);
    const sugar = measureIngredients("sugar", 1);
    const eggs = measureIngredients("eggs", 3);
    const butter = measureIngredients("butter", 0.5);
    mixIngredients([flour, sugar, eggs, butter]).then();
    bakeBatter(batter).then(callback);
  }
  

  function prepareBatter() {
    console.log("Preparing cake batter...");
    console.log(`Measuring flour cups of 1`);
    const sugar = measureIngredients("sugar", 1);
    const eggs = measureIngredients("eggs", 3);
    const butter = measureIngredients("butter", 0.5);
    mixIngredients([flour, sugar, eggs, butter]).then();

  }
  
  function measureIngredients(ingredient, quantity) {
    console.log(`Measuring ${quantity} cups of ${ingredient}`);
    return {
      ingredient,
      quantity,
    };
  }
  

  function mixIngredients(ingredients) {
    console.log("Mixing ingredients together...");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mixing complete!");
        const mixedBatter = {
          mixture: ingredients,
          consistency: "smooth",
        };
        resolve(mixedBatter);
      }, 3000); 
    });
  }
  
  
  function bakeBatter(batter) {
    console.log("Baking the batter...");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Baking complete!");
        const bakedCake = {
          batter,
          status: "baked",
        };
        resolve(bakedCake);
      }, 5000);
    });
  }
  
  function frostCake(cake) {
      if(cake.status != "baked"){
          throw new Error("Cake is not baked!!! Gooey! Mush!")
    }
    console.log("Frosting the cake...");

    cake["status"]= "frosted",
    cake["decoration"]= "sprinkles"

    const frostedCake = cake
    return frostedCake;
  }
  
bakeCake();