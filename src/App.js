/*
https://api.nasa.gov/#apod api key alın
postmanda bağlantı testi yapın.
app js içerisinde (henüz useState, useEffect, prop vs olmadan) datayı axios ile çekin.
datayı çekebilirseniz sonra useState ile state’e atın
state’den bir datayı ekranda görün
Sonra proje dökümanında baştan okuyarak bu codebase’i modifiye edin.
*/
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./App.css";
import Image from "./components/Image";
import Description from "./components/Description";
import Dater from "./components/Dater";

function App() {
  const [serverData, setServerData] = useState({});

  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=CNoFpgH9kHTRFjtnUT53R1DQX31Jj2IXOVDq9JpD"
    )
    .then(function (response) {
      console.log(response);
      setServerData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="App">
      <Image props={serverData.url} />

      <Description photo={serverData.url} />
      <h4>🚀APOD title:{serverData.title}</h4>
      <p>🚀APOD explanation:{serverData.explanation}</p>
      <Dater />
    </div>
  );
}

export default App;
