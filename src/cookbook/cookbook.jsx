import React, {useState} from 'react';
import './cookStyle.css';
import recipes from './recipes/recipe';

export function Cookbook() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <main>
      <div>
        <label className="recipeLabel">
          <div>
            <h1>{selectedRecipe ? selectedRecipe.name : "Select a Recipe"}</h1>
          </div>
        </label>

        <div id="allRecipes">
          <ul>
          {recipes.map((recipe, index) => (
              <li key={index} onClick={() => setSelectedRecipe(recipe)}>
                <li>{recipe.name}</li>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedRecipe && (
        <div id="recipeContainer">
          <div id="ingredients">
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {selectedRecipe.ingredients.map((item, index) => (
                  <tr key={index}>
                    <td>{item.quantity}</td>
                    <td>{item.ingredient}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div id="instructions">
            {selectedRecipe.instructions.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
