import React from "react";

/* function Image(props) {
  if (!props.url) return <h3>Yükleniyor...</h3>;
  return <img src={props.url} alt="APOD image" />;
} */
function Image(props) {
  const { url, selamla } = props;
  if (!url) return <h3>Yükleniyor...</h3>;
  return <img src={url} alt="APOD image" onClick={() => selamla("emra")} />;

  // foksiyonda parametre verince arrow function şart
}
/* function Image({ url }) {
  if (!url) return <h3>Yükleniyor...</h3>;
  return <img src={url} alt="APOD image" />;
} */

export default Image;
