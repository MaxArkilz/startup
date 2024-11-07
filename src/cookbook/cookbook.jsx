import React from 'react';
import './cookStyle.css';

export function Cookbook() {
  return (
    <main>
      <div>
        <label className="recipeLabel">
          <div>
            <h1>Beef Stew</h1>
          </div>
        </label>

        <div id="allRecipes">
          <ul>
            <li><h3>Breakfast</h3></li>
            <li>Crepes (fancy)</li> 
                    <li>French Toast</li> 
                    <li>French Toast (Kneaders Overnight)</li> 
                    <li>German Pancakes + Butter Syrup</li> 
                    <li>Masa Harina Blueberry Pancakes</li> 
                    <li>Oatmeal / Overnight Oats</li> 
                    <li>Whole Wheat Waffles</li> 
                    <li>Random Egg Meal Ideas</li> 
                    <li>Random Sandwich Ideas</li> 
                    <li>Random Quesadilla Ideas</li> 
                    <li><h3>Dinner</h3></li>
                    <li>Baked Potatoes</li> 
                    <li>Chicken Divan</li>  
                    <li>Italian Chicken Sauce (Slow Cooker)</li> 
                    <li>Potato Salad</li> 
                    <li>Quinoa Bowls</li> 
                    <li>Sourdough Sliders (Grilled)</li> 
                    <li><h4>Wraps</h4></li> 
                    <li>Arepas de Venezuela</li>
                    <li>Enchiladas</li> 
                    <li>Fish Tacos</li> 
                    <li>Gyros</li>
                    <li>Smothered Chicken Burritos</li> 
                    <li>Tacos</li> 
                    <li><h4>Pasta</h4></li>
                    <li>Alfredo (Light)</li> 
                    <li>Alfredo (Thicc)</li> 
                    <li>Baked Mac N' Cheese</li> 
                    <li>Beef Stroganoff</li> 
                    <li>Chicken Parmesan</li> 
                    <li>Linguine and Clam Sauce</li> 
                    <li>Macaroni Salad</li> 
                    <li>Marinara Sauce (Spaghetti)</li> 
                    <li><h4>Asian Dishes</h4></li>
                    <li>Butter Chicken (slow cooker opt.)</li> 
                    <li>Cupbop Spoof</li> <li>Curry (Chicken)</li> 
                    <li>Fried Rice (Bloomquist)</li> 
                    <li>Pad Kra Pow</li> 
                    <li>Peanut Thai Noodles</li> 
                    <li>Slow Cooker Curry (Mom's Version)</li> 
                    <li><h4>Soups</h4></li>
                    <li>Chicken + Wild Rice Soup</li> 
                    <li>Chicken Noodle Soup</li> 
                    <li>Clam Chowder</li> 
                    <li>Corn Chowder</li> 
                    <li>Homemade Chili</li> 
                    <li>Slow Cooker Beef Stew</li> 
                    <li><h3>Baking</h3></li>
                    <li>French Bread</li> 
                    <li>Gingerbread</li> 
                    <li>Whole Wheat Bread (or scones)</li> 
                    <li>Coconut Brownies (Ema)</li> 
                    <li>"Expresso" Brownies</li> 
                    <li>Microwave Mug Brownies (Leah + Abe)</li> 
                    <li>Truffle Brownies (Martha Stewart)</li> 
                    <li>Chocolate Chip Cookies (Mom)</li> 
                    <li>Chocolate Crinkle Cookies</li> 
                    <li>No-Bake Cookies (Mom)</li> 
                    <li>Peanut Butter Chocolate Chip Cookies</li> 
                    <li>Pumpkin Oatmeal Chocolate Chip Cookies</li> 
                    <li>Outrageous Cookies (Abe)</li> 
                    <li>Chocolate Coconut Poke Cake</li> 
                    <li>Sophie Bloomquist's Chocolate Cake</li> 
                    <li>Tres Leches Cake</li> 
                    <li>Oreo Truffles (Sam)</li> 
                    <li>Rice Crispy PB Chocolate Bar Things</li>
          </ul>
        </div>
      </div>

      <div id="recipeContainer">
        <div id="ingredients">
          <table>
            <tr>
              <th>Ingredients</th>
              <th></th>
            </tr>
            <tr id="servingSize">
              <td>6</td>
              <td>servings</td>
            </tr>
            {/* Add more rows here */}
          </table>
        </div>

        <div id="instructions">
          <p><b>- Chop:</b> beef (if not already cut), onion, carrots, and potatoes. Set aside.</p>
          {/* Add more paragraphs here */}
        </div>
      </div>
    </main>
  );
}
