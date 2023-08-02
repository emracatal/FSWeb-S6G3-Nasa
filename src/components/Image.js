import React from "react";

function Image(props) {
  if (!props.photoOfTheDay) return <h3>Yükleniyor...</h3>;

  return <img src={props.url} alt="APOD image" />;
}

export default Image;
