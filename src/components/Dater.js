import React from "react";
import { useState } from "react";

function Dater() {
  const [date, setDate] = useState();

  console.log("date", date);
  return (
    <div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />{" "}
    </div>
  );
}

export default Dater;
