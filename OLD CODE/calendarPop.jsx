import React, { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import CalendarDay from './dragItems.jsx'
import "./mealStyle.css";

function Calendar({ calendarItems, onDrop }) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const monthName = today.toLocaleString("default", { month: "long" });
    const yearNumber = today.getFullYear();

    setMonth(monthName);
    setYear(yearNumber);

    const firstDayOfMonth = new Date(yearNumber, today.getMonth(), 1).getDay();
    const daysInMonth = new Date(yearNumber, today.getMonth() + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push("");
    }
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }

    setCalendarDays(daysArray);
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      onDrop(active.id, over.id); // Pass dropped item and target day id
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="calendar">
        <div className="calendarHeader">
          <h1>{`${month} ${year}`}</h1>
        </div>
        <div className="calendarGrid">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>

          {calendarDays.map((day, index) =>
            day ? (
              <CalendarDay
                key={index}
                day={day}
                onDrop={onDrop}
                calendarItems={calendarItems}
              />
            ) : (
              <div key={index} className="date" />
            )
          )}
        </div>
      </div>
    </DndContext>
  );
}

export default Calendar;
