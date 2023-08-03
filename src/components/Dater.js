import React from "react";

function Dater(props) {
  const { setDate } = props;
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <input type="date" id="date" name="date" onChange={dateHandler} />
    </div>
  );
}

export default Dater;
