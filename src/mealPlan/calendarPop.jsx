import React, { useEffect, useState } from "react";

function Calendar() {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(0);
    const [calendarDays, setCalendarDays] = useState([]);

    useEffect(() => {
        const today = new Date();
        const monthName = today.toLocaleString("default", {month: "long"});
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

return (
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

        {calendarDays.map((day, index) => (
          <div key={index} className="date">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;