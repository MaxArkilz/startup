import "./mealStyle.css";
import React, { useState } from 'react';
import moment from 'moment';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import recipes from '../cookbook/recipes/recipe';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [events, setEvents] = useState({}); // Stores events for each day
  const [recipesList, setRecipesList] = useState([...recipes]); // List of draggable recipes

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = moment(currentDate).startOf('month').day();

  const nextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const prevMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const renderCalendar = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<td key={`blank-${i}`} className="empty">{""}</td>);
    }

    const daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const currentDay = `${currentDate.format('YYYY-MM')}-${d.toString().padStart(2, '0')}`;
      daysInMonthArray.push(
        <CalendarCell key={d} date={currentDay} events={events[currentDay] || []} />
      );
    }

    const totalSlots = [...blanks, ...daysInMonthArray];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((d, i) => <tr key={i}>{d}</tr>);
  };

  const handleDragEnd = (result) => {
    const { active, over } = result;
  
    if (!over) return; // If dropped outside any droppable area, do nothing
  
    const date = over.id; // Target date of the drop
    const recipe = active.data.current.recipe; // The recipe being dragged
  
    // Handle drag and drop between days
    setEvents((prevEvents) => {
      const sourceDay = active.id.split('-')[1]; // Extract the day from active.id
      const targetDay = date.split('-')[2]; // Extract the day from over.id
  
      // Remove the recipe from the source day (if any)
      const updatedSourceEvents = prevEvents[sourceDay] ? prevEvents[sourceDay].filter(r => r.id !== recipe.id) : [];
  
      // Add the recipe to the target day
      const updatedTargetEvents = prevEvents[targetDay] ? [...prevEvents[targetDay], recipe] : [recipe];
  
      return {
        ...prevEvents,
        [sourceDay]: updatedSourceEvents,
        [targetDay]: updatedTargetEvents,
      };
    });
  };

  return (
    <main>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="calendarMain">
          <div className="calendarStack">
            <h2>{currentDate.format('MMMM YYYY')}</h2>
            <div className="buttonGroup">
              <button onClick={prevMonth}>Prev Month</button>
              <button onClick={nextMonth}>Next Month</button>
            </div>
            <table className="calendarDiv">
              <thead>
                <tr>
                  {moment.weekdaysShort().map(day => <th key={day}>{day}</th>)}
                </tr>
              </thead>
              <tbody>{renderCalendar()}</tbody>
            </table>
          </div>
          <div className="draggableItems">
            {recipes.map((recipe) => (
              <DraggableItem key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </DndContext>
    </main>
  );
};

const CalendarCell = ({ date, events }) => {
  const { setNodeRef } = useDroppable({
    id: date, // The unique ID for the day
  });

  return (
    <td ref={setNodeRef}>
      {date.split('-')[2]} {/* Display the day number */}
      {events.map((recipe, index) => (
        <div key={index} className="calendar-event">
          {recipe.name}
        </div>
      ))}
    </td>
  );
};

const DraggableItem = ({ recipe, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `recipe-${recipe.id}`, // Ensure each draggable item has a unique ID
    data: { recipe },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="draggable-item">
      <p>{recipe.name}</p>
    </div>
  );
};

export default Calendar;
