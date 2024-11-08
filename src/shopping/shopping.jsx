import React from 'react';
import './shopStyle.css';

export function Shopping() {
  return (
    <main>
      <div className="checklist">
      <div className="column">
        <h4>Meat</h4>
        <label><input type="checkbox" /> 2 lbs. chicken</label><br />
        <label><input type="checkbox" /> 2 lb. stew beef</label><br />

        <h4>Dairy</h4>
        <label><input type="checkbox" /> 1 cup cheese</label><br />
        <label><input type="checkbox" /> 1/2 cup cheese, shredded</label><br />
        <label><input type="checkbox" /> 1/2 cup sour cream</label><br />
        <label><input type="checkbox" /> 1 TBSP butter</label><br />
        <label><input type="checkbox" /> 2 TBSP butter</label><br />

        <h4>Spices</h4>
        <label><input type="checkbox" /> 1 TBSP chili powder</label><br />
        <label><input type="checkbox" /> 1 1/2 tsp salt</label><br />
        <label><input type="checkbox" /> 1 tsp cumin, garlic powder, onion powder</label><br />
        <label><input type="checkbox" /> 1/2 tsp paprika, oregano, pepper, chipotle powder</label><br />
        <label><input type="checkbox" /> 1/2 tsp cumin</label><br />
        <label><input type="checkbox" /> 1/2 tsp salt, pepper</label><br />
        <label><input type="checkbox" /> 1/3 tsp garlic salt, pepper</label><br />
        <label><input type="checkbox" /> 2 bay leaves</label><br />
        <label><input type="checkbox" /> 2 tsp rosemary</label><br />

        <h4>Canned Goods</h4>
        <label><input type="checkbox" /> 1 can black beans</label><br />
        <label><input type="checkbox" /> 1 can diced green chiles (4 oz)</label><br />
        <label><input type="checkbox" /> 1 can diced tomatoes (14 oz)</label><br />
        <label><input type="checkbox" /> 2 TBSP tomato paste</label><br />
      </div>

      <div className="column">
        <h4>Produce</h4>
        <label><input type="checkbox" /> 1 onion, diced</label><br />
        <label><input type="checkbox" /> 3 cloves garlic, minced</label><br />
        <label><input type="checkbox" /> 4 carrots, sliced</label><br />
        <label><input type="checkbox" /> 1 lb yukon gold potatoes</label><br />
        <label><input type="checkbox" /> 1 cup frozen peas</label><br />

        <h4>Grains and Carbs</h4>
        <label><input type="checkbox" /> 2 cups white rice</label><br />
        <label><input type="checkbox" /> 6 burrito tortillas</label><br />

        <h4>Other</h4>
        <label><input type="checkbox" /> 1 TBSP olive oil</label><br />
        <label><input type="checkbox" /> 2 TBSP olive oil</label><br />
        <label><input type="checkbox" /> 1 tsp liquid smoke</label><br />
        <label><input type="checkbox" /> 3 TBSP flour</label><br />
        <label><input type="checkbox" /> 2 cups chicken broth</label><br />
        <label><input type="checkbox" /> 1 TBSP red wine vinegar</label><br />
        <label><input type="checkbox" /> 4 cups beef broth</label><br />
        <label><input type="checkbox" /> 2 tsp beef bouillon</label><br />
        <label><input type="checkbox" /> 1 1/2 TBSP worcestershire</label><br />
      </div>
    </div>
  </main>
  );
}