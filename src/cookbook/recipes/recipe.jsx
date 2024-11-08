const recipes = [
  {
    name: "Crepes (fancy)",
    ingredients: [
      // { quantity: "", ingredient: "" },
      { quantity: "2", ingredient: "eggs"},
      { quantity: "2 TBSP", ingredient: "butter"},
      { quantity: "2 cups", ingredient: "milk"},
      { quantity: "1 tsp", ingredient: "vanilla"},
      { quantity: "1 TBSP", ingredient: "sugar"},
      { quantity: "1/2 tsp", ingredient: "salt"},
      { quantity: "1 1/2", ingredient: "flour"},
      { quantity: "2 cups", ingredient: "frozen berries"},
      { quantity: "1 TBSP", ingredient: "sugar"},
      { quantity: "1/2 tsp", ingredient: "orange zest"},
      { quantity: "3 cups", ingredient: "sliced strawberries"},
      { quantity: "2 oz", ingredient: "cream cheese"},
      { quantity: "1 TBSP", ingredient: "powdered sugar"},
      { quantity: "1 TBSP", ingredient: "milk"},
      { quantity: "1/4 cup", ingredient: "chocolate chips"},
      { quantity: "2 cups", ingredient: "heavy cream"},
    ],
    instructions: [
      "- Make the crepe batter: add eggs, butter, milk, vanilla, sugar, salt, & white flour to a blender. Cover and blend until smooth.",
      "- Cook the crepes: heat skillet over medium heat and lightly coat with butter (will need a spare stick, not on ingredients list). For each crepe, pour coat with butter, then pour 1/4 cup batter in the center. Immediately tip + rotate the pan until the batter covers the bottom in a thin layer. Cook until underside is dry + golden; flip and cook for an additional 30 seconds.",
      "- Berry Filling (opt.): combine frozen berries, sugar, & orange zest in a small saucepan over medium heat. Let simmer while making crepes. Add strawberries before serving.",
      "- Cream Cheese Spread (opt.): mix cream cheese, powdered sugar, & milk. Set aside.",
      "- Chocolate Drizzle & Whipped Cream (opt.): melt chocolate chips. Mix in 2 TBSP heavy cream. Whip the remaining cream until stiff peaks form.",
      "- To Assemble a Fancy Crepe: spread cream cheese over a flat crepe. Add berry filling + whipped cream. Roll & drizzle with chocolate.",
    ],
  },
  {
    name: "French Toast",
    ingredients: [
      { quantity: "8 slices", ingredient: "bread" },
      { quantity: "4", ingredient: "eggs" },
      { quantity: "1 cup", ingredient: "milk" },
      { quantity: "1 tsp", ingredient: "vanilla" },
      { quantity: "1 tsp", ingredient: "cinnamon" },
      { quantity: "pinch", ingredient: "cardamom, nutmeg, etc. (optional)" }
    ],
    instructions: [
      "- Mix the eggs: beat eggs, milk, vanilla, cinnamon, and any optional spices together until well combined.",
      "- Make the French Toast: dip both sides of each slice of bread in the egg mixture, then place on a hot, buttered skillet. Cook until golden brown on each side.",
      "- Serve: with butter, syrup, or other various toppings of your choice."
    ]
  },
  {
    name: "French Toast (Kneaders Overnight)",
    ingredients: [
      { quantity: "1 loaf", ingredient: "Kneaders chunky cinnamon bread" },
      { quantity: "8", ingredient: "eggs" },
      { quantity: "3 cups", ingredient: "milk" },
      { quantity: "1 TBSP", ingredient: "brown sugar" },
      { quantity: "1 TBSP", ingredient: "vanilla" },
      { quantity: "3/4 tsp", ingredient: "salt" },
      { quantity: "2 TBSP", ingredient: "butter (for greasing pan)" },
      { quantity: "1/2 cup", ingredient: "butter (for syrup)" },
      { quantity: "1/2 cup", ingredient: "buttermilk (or 1/2 TBSP vinegar + 1/2 cup milk)" },
      { quantity: "3/4 cup", ingredient: "sugar" },
      { quantity: "1 tsp", ingredient: "vanilla (for syrup)" },
      { quantity: "1 tsp", ingredient: "baking soda" },
      { quantity: "", ingredient: "sliced strawberries" },
      { quantity: "", ingredient: "whipped cream" }
    ],
    instructions: [
      "- Prepare pan & bread: Grease a 9x13” baking dish with 1 TBSP butter. Slice the bread loaf into 8 pieces. Lay 6 slices in the dish, and cut the remaining 2 slices to fill any gaps.",
      "- Make egg mixture: In a large bowl, whisk together eggs, milk, brown sugar, vanilla, and salt. Pour the mixture evenly over the bread slices.",
      "- Refrigerate: Cover the dish and refrigerate overnight, or for at least 4 hours to allow the bread to soak up the mixture.",
      "- Bake: Preheat oven to 350°F. Just before baking, cut 1 TBSP butter into small pieces and scatter over the bread. Bake uncovered for 45-50 minutes until golden and set.",
      "- Prepare syrup (optional): In a medium saucepan over medium-high heat, melt 1/2 cup butter. Stir in the buttermilk and sugar. Bring to a rolling boil and let it boil for 1 minute. Remove from heat, then whisk in 1 tsp vanilla and baking soda. Continue whisking until bubbles dissipate and syrup thickens.",
      "- Serve French Toast: Top with sliced strawberries, whipped cream, and drizzle with buttermilk syrup if desired.",
      "* to make buttermilk, add 1 TBSP white vinegar to 1 cup milk and let sit 5 minutes."
    ]
  },
  {
    name: "German Pancakes + Butter Syrup",
    ingredients: [
      { quantity: "5 TBSP", ingredient: "butter" },
      { quantity: "6", ingredient: "eggs" },
      { quantity: "1 cup", ingredient: "flour" },
      { quantity: "1 cup", ingredient: "milk" },
      { quantity: "1/2 tsp", ingredient: "salt" },
      { quantity: "2 cups", ingredient: "sugar" },
      { quantity: "3/4 cup", ingredient: "evaporated milk" },
      { quantity: "1/4 cup", ingredient: "water" },
      { quantity: "1/4 cup", ingredient: "butter (for syrup)" },
      { quantity: "1 TBSP", ingredient: "vanilla" }
    ],
    instructions: [
      "- Prepare pan: Place 5 TBSP butter in a 9x13” baking pan and melt in an oven preheated to 425°F.",
      "- Make batter: In a mixing bowl, whisk together the eggs, flour, milk, and salt until smooth. Pour the batter into the pan over the melted butter.",
      "- Bake: Bake for 15-20 minutes, or until the pancakes are golden and puffed.",
      "- Prepare syrup: In a medium saucepan, combine the sugar, evaporated milk, and water. Bring the mixture to a boil, then remove from heat and stir in 1/4 cup butter and vanilla until smooth.",
      "- Serve: Serve the baked pancakes topped with the hot syrup."
    ]
  },
  {
    name: "Masa Harina Blueberry Pancakes",
    ingredients: [
      { quantity: "2 cups", ingredient: "masa harina" },
      { quantity: "2/3 cup", ingredient: "sugar" },
      { quantity: "4 tsp", ingredient: "baking powder" },
      { quantity: "1/2 tsp", ingredient: "salt" },
      { quantity: "1 1/2 cups", ingredient: "milk (plus more if needed)" },
      { quantity: "4", ingredient: "eggs" },
      { quantity: "4 TBSP", ingredient: "butter, melted" },
      { quantity: "2 cups", ingredient: "blueberries" }
    ],
    instructions: [
      "- Mix dry ingredients: In a medium bowl, combine masa harina, sugar, baking powder, and salt.",
      "- Mix wet ingredients: In another bowl, whisk together milk, eggs, and melted butter until smooth.",
      "- Combine ingredients: Pour the wet mixture into the dry ingredients, stirring until just combined. If the batter is too thick, add more milk as needed. Gently fold in the blueberries.",
      "- Cook pancakes: Heat a griddle or large frying pan over medium heat and lightly butter or grease the surface. Pour about 1/4 cup of batter per pancake onto the griddle, cooking until the edges are set and bubbles form on the surface, about 2 minutes. Flip and cook until the other side is golden brown.",
      "- Serve: Top with butter, syrup, or your favorite pancake toppings."
    ]
  },
  {
    name: "Whole Wheat Waffles",
    ingredients: [
      { quantity: "2 2/3 cups", ingredient: "whole wheat flour" },
      { quantity: "1 1/2 TBSP", ingredient: "baking powder" },
      { quantity: "3/4 tsp", ingredient: "salt" },
      { quantity: "3", ingredient: "eggs, separated" },
      { quantity: "2 2/3 cups", ingredient: "milk (or buttermilk substitute)" },
      { quantity: "3/4 cup", ingredient: "oil" },
      { quantity: "1 1/2 TBSP", ingredient: "sugar" },
      { quantity: "1 1/2 tsp", ingredient: "vanilla" }
    ],
    instructions: [
      "- Separate the eggs: Place egg whites in a large mixing bowl and egg yolks in a medium bowl.",
      "- Mix the dry ingredients: In a separate bowl, combine whole wheat flour, baking powder, and salt.",
      "- Mix the wet ingredients: To the bowl with egg yolks, add milk, oil, sugar, and vanilla. Stir until smooth.",
      "- Beat the egg whites: Using a mixer or whisk, beat the egg whites until stiff peaks form.",
      "- Combine dry and wet ingredients: Pour the dry ingredients into the wet ingredients, mixing until just combined.",
      "- Fold in egg whites: Gently fold the beaten egg whites into the batter with a spatula until just incorporated.",
      "- Cook waffles: Pour batter into a preheated waffle iron and cook according to the waffle iron’s instructions, until golden brown and crispy."
    ]
  },
  {
    name: "Chicken Divan",
    ingredients: [
      { quantity: "3 cups", ingredient: "brown rice, cooked" },
      { quantity: "24 oz", ingredient: "frozen broccoli" },
      { quantity: "1 lb", ingredient: "cooked chicken (or canned chicken)" },
      { quantity: "1 tsp", ingredient: "garlic powder" },
      { quantity: "1 cup", ingredient: "cheddar cheese, divided" },
      { quantity: "1 cup", ingredient: "parmesan cheese, divided" },
      { quantity: "1 can", ingredient: "cream of chicken soup" },
      { quantity: "1 cup", ingredient: "mayonnaise" },
      { quantity: "2 TBSP", ingredient: "lemon juice" },
      { quantity: "1 tsp", ingredient: "curry powder" },
      { quantity: "3 TBSP", ingredient: "olive oil, divided" },
      { quantity: "1 tsp", ingredient: "minced garlic" },
      { quantity: "1/2 cup", ingredient: "slivered almonds" },
      { quantity: "1/2 cup", ingredient: "bread crumbs" }
    ],
    instructions: [
      "- Cook rice: Prepare brown rice according to package instructions and set aside.",
      "- Assemble bottom layer: Grease a 9x13” baking dish. Spread the frozen broccoli evenly across the bottom. Layer shredded chicken over the broccoli and sprinkle with garlic powder. Cover with half of the cheddar and half of the parmesan cheese.",
      "- Add sauce layer: In a separate bowl, mix the cream of chicken soup, lemon juice, mayonnaise, and curry powder until smooth. Pour this sauce mixture over the contents of the casserole dish and top with the remaining cheddar and parmesan cheese.",
      "- Make topping: In a skillet, heat 1 1/2 TBSP olive oil over medium heat and add minced garlic. Sauté until golden, then add bread crumbs, stirring continually until lightly golden. Sprinkle over the top of the casserole.",
      "- Brown almonds: Heat the remaining olive oil in the skillet and lightly brown the slivered almonds. Layer them over the breadcrumbs on top of the casserole.",
      "- Bake: Cover the casserole with tinfoil and bake at 350°F for 40 minutes, until the broccoli is heated through. Serve over the prepared brown rice."
    ]
  },
  {
    name: "Italian Chicken Sauce (Slow Cooker)",
    ingredients: [
      { quantity: "3 cups", ingredient: "rice" },
      { quantity: "4-5", ingredient: "chicken breasts" },
      { quantity: "1/2 cup", ingredient: "butter" },
      { quantity: "1 cup", ingredient: "chicken broth" },
      { quantity: "1 1/2 packets", ingredient: "dry Italian dressing mix" },
      { quantity: "16 oz", ingredient: "cream cheese" },
      { quantity: "2 cans", ingredient: "cream of chicken soup" }
    ],
    instructions: [
      "- Assemble chicken: In a crockpot, add chicken, chicken broth, butter, and Italian dressing mix.",
      "- Cook: Set the crockpot to high and cook for 3 hours, or until the chicken is cooked through (chicken can be frozen when placed in the crockpot).",
      "- Shred chicken: Remove the chicken from the crockpot and shred or slice it. Return the shredded chicken to the crockpot.",
      "- Add remaining ingredients: Add the cream cheese and cream of chicken soup to the crockpot. Stir to combine.",
      "- Cook: Reduce the heat to low and cook for an additional 2 hours, or until ready to serve.",
      "- Make rice: Prepare rice separately and serve with the chicken mixture. Optionally, add vegetables as a side dish. You can also serve over pasta or quinoa."
    ]
  },
  {
    name: "Potato Salad",
    ingredients: [
      { quantity: "5 lbs", ingredient: "potatoes" },
      { quantity: "12-18", ingredient: "eggs, boiled" },
      { quantity: "4", ingredient: "large pickles" },
      { quantity: "1 cup", ingredient: "mayonnaise" },
      { quantity: "1 TBSP", ingredient: "pickle juice" },
      { quantity: "1 tsp", ingredient: "mustard" }
    ],
    instructions: [
      "- Boil potatoes: Bring a large pot of water to a boil. Add potatoes and cook whole for 30-40 minutes until easily pierced with a fork. Remove from water and refrigerate to cool.",
      "- Boil eggs: Bring water to a boil in a medium pot. Carefully add eggs and cook for 8-12 minutes (depending on desired yolk firmness). Once done, place eggs in an ice bath to cool.",
      "- Dice ingredients: Once the potatoes have cooled, dice them and place in a large bowl. Dice the pickles and boiled eggs as well.",
      "- Make the sauce: In a separate container, combine mayonnaise, pickle juice, mustard, salt, and pepper. Stir well to combine and adjust ingredients to taste.",
      "- Make salad: Add the sauce to the potatoes, eggs, and pickles, and stir to coat evenly. Serve chilled."
    ]
  },
  {
    name: "Gyros",
    ingredients: [
      { quantity: "2 lbs", ingredient: "chicken breast" },
      { quantity: "2 TBSP", ingredient: "olive oil" },
      { quantity: "2 TBSP", ingredient: "lemon juice" },
      { quantity: "2 tsp each", ingredient: "paprika, cumin, garlic powder" },
      { quantity: "1 tsp each", ingredient: "turmeric, coriander, salt" },
      { quantity: "1/4 tsp each", ingredient: "black pepper, cinnamon, onion powder, red pepper flakes" },
      { quantity: "2", ingredient: "cucumbers" },
      { quantity: "3", ingredient: "tomatoes" },
      { quantity: "1", ingredient: "red onion" },
      { quantity: "1 container", ingredient: "tzatziki sauce" },
      { quantity: "6", ingredient: "whole pita breads" }
    ],
    instructions: [
      "- Mix marinade: In a bowl or ziplock bag, combine olive oil, lemon juice, and all spices. Add the chicken and marinate for 1 hour in the refrigerator.",
      "- Chop veggies: While the chicken marinates, slice cucumbers and dice tomatoes and onions. Set aside.",
      "- Cook chicken: Grill or fry the chicken in a skillet over medium heat until fully cooked, flipping only once to retain moisture. Shred or chop the chicken into bite-sized pieces.",
      "- Assemble: Warm the pita bread, spread tzatziki sauce over each pita, then layer with chicken and chopped veggies. Serve immediately."
    ]
  },

  // Recipes to do:
  // Quinoa Bowls, Sourdough Sliders, Arepas de Venezuela, Enchiladas, Fish Tacos,
  // Smothered Chicken Burritos, Tacos, Alfredo (light), Alfredo (thick), 
  // Baked Mac n' Cheese, Beef Stroganoff, Chicken Parmesan, Linguine and Clam Sauce,
  // Macaroni Salad, Marinara Sauce, Butter Chicken, Cupbop Spoof, Curry, Fried Rice,
  // Pad Kra Pow, Peanut Thai Noodles, Slow Cooker Curry, Chicken + Wild Rice Soup,
  // Chicken Noodle Soup, Clam Chowder, Corn Chowder, Homemade Chili, Slow Cooker Beef Stew,
  // French Bread, Gingerbread, Whole Wheat Bread, Coconut Brownies, Mocha Brownies,
  // Microwave Mug Brownies, Truffle Brownies, Chocolate Chip Cookies, Chocolate Crinkle Cookies,
  // No-Bake Cookies, Peanut Butter Chocolate Chip Cookies, Outrages Cookies, Chocolate Coconut Poke Cake,
  // Sophie's Easy Chocolate Cake, Tres Leches Cake, Oreo Truffles, Rice Crispy PB Chocolate Bar Things
];


export default recipes;