import React from 'react';
import "./mealStyle.css";
import Calendar from './calendarPop';
import recipes from '../cookbook/recipes/recipe';

export function MealPlan() {
  return (
    <main className='calendarMain'>

        <div className='calendarDiv'>
          <Calendar />
        </div>
        <div className='recipeDiv'>
        {recipes.map((recipe, index) => (
              <li key={index} onClick={() => setSelectedRecipe(recipe)}>
                <li>{recipe.name}</li>
              </li>
            ))}
        </div>
    </main>
  );
}