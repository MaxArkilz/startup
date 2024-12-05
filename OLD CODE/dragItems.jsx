import React from "react";
import { useDroppable } from "@dnd-kit/core";

function CalendarDay({ day, onDrop, calendarItems }) {
  const { isOver, setNodeRef } = useDroppable({
    id: `day-${day}`,
  });

  const dayStyle = {
    backgroundColor: isOver ? "lightblue" : "white",
    padding: "10px",
    border: "1px solid #ddd",
    minHeight: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div ref={setNodeRef} style={dayStyle} className="date">
      <p>{day}</p>
      {calendarItems[`day-${day}`] && <p>{calendarItems[`day-${day}`].name}</p>}
    </div>
  );
}

export default CalendarDay;
