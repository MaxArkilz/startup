import React, { useState } from 'react';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import "./mealStyle.css";
import Calendar from './calendarPop';
import recipes from '../cookbook/recipes/recipe';

function DraggableRecipe({ recipe, index }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: recipe.name,
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {recipe.name}
    </li>
  );
}

function DroppableDay({ day, onDrop }) {
  const { isOver, setNodeRef } = useDroppable({
    id: day,
  });

  const style = {
    backgroundColor: isOver ? 'lightblue' : 'white',
  };

  return (
    <div ref={setNodeRef} style={style} className="calendar-day">
      <h3>{day}</h3>
      <p>Drop a recipe here</p>
    </div>
  );
}

export function MealPlan() {
  const [calendarItems, setCalendarItems] = useState({});

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      setCalendarItems((prev) => ({
        ...prev,
        [over.id]: active.id,
      }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className='calendarMain'>

          <div className='calendarDiv'>
            <Calendar calendarItems={calendarItems} DroppableDay={DroppableDay} />
          </div>

          <div className='recipeDiv'>
          {recipes.map((recipe, index) => (
                <DraggableRecipe key={index} recipe={recipe} index={index} />
              ))}
          </div>
      </main>
    </DndContext>
  );
}