import React, { useEffect, useState } from "react";

function RandomAdvice() {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }, []);

  return (
    <div>
      {advice ? <p style={{ fontStyle: "italic"}}>{advice}</p> : "Loading..."}
    </div>
  );
}

export default RandomAdvice;