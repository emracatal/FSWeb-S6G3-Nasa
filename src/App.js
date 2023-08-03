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
import NavBar from "./layout/NavBar";

function App() {
  const [serverData, setServerData] = useState({});
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "CNoFpgH9kHTRFjtnUT53R1DQX31Jj2IXOVDq9JpD",
          date: date,
        },
      })
      .then(function (response) {
        console.log(response);
        setServerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [date]);

  function test(isim) {
    console.log("selam", isim);
  }
  return (
    <div className="App">
      <NavBar />
      <Dater setDate={setDate} />
      <Image url={serverData.url} selamla={test} />
      <Description photo={serverData.url} />
      <h4>🚀{serverData.title}</h4>
      <p>🚀{serverData.explanation}</p>
    </div>
  );
}

export default App;
