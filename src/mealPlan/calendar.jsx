import "./mealStyle.css";
import React, { useState } from 'react';
import moment from 'moment';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import recipes from '../cookbook/recipes/recipe';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [events, setEvents] = useState({});

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
    if (result.over && result.over.id) {
      const { id: date } = result.over;
      const recipe = result.active.data.current.recipe;
      setEvents(prev => ({
        ...prev,
        [date]: [...(prev[date] || []), recipe]
      }));
    }
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
      {recipes.map((recipe, index) => (
                  <DraggableItem key={index} recipe={recipe} index={index} />
                ))}
      </div>
      </div>
    </DndContext>
    </main>
  );
};

const CalendarCell = ({ date, events }) => {
  const { setNodeRef } = useDroppable({ id: date });
  
  return (
    <td ref={setNodeRef}>
      {date.split('-')[2]}
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
      id: `recipe-${index}`, 
      data: { recipe } 
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


