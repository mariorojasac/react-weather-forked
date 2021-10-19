import React from "react";
import "./styles.css";
import Card from "./components/card";
import weatherData from "./data/weatherData";

export default function App() {
  const cards = weatherData.map((card, index) => (
    <Card key={index} {...card} />
  ));
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{cards}</section>
    </div>
  );
}
