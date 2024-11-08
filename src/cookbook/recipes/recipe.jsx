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
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "French Toast (Kneaders Overnight)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "German Pancakes + Butter Syrup",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Masa Harina Blueberry Pancakes",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Oatmeal / Overnight Oats",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Whole Wheat Waffles",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Random Egg Meal Ideas",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Random Sandwich Ideas",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Random Quesadilla Ideas",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Baked Potatoes",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Chicken Divan",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Italian Chicken Sauce (Slow Cooker)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Potato Salad",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Quinoa Bowls",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Sourdough Sliders (Grilled)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Arepas de Venezuela",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Enchiladas",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Fish Tacos",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Gyros",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Smothered Chicken Burritos",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Tacos",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Alfredo (Light)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Alfredo (Thicc)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Baked Mac N' Cheese",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Beef Stroganoff",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Chicken Parmesan",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Linguine and Clam Sauce",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Macaroni Salad",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Marinara Sauce (Spaghetti)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Butter Chicken (slow cooker opt.)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Cupbop Spoof",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Curry (Chicken)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Fried Rice (Bloomquist)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Pad Kra Pow",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Peanut Thai Noodles",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  {
    name: "Slow Cooker Curry (Mom's Version)",
    ingredients: [
      // { quantity: "", ingredient: "" },
    ],
    instructions: [
      // "- Step 1...",
    ],
  },
  // Add remaining recipes following the same structure
];


export default recipes;