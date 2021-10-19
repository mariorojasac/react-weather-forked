import React from "react";
import Conditions from "./conditions";
import Icon from "./icon";
import Time from "./time";

const Card = ({ img, conditions, time }) => {
  return (
    <div className="weather">
      <Conditions conditions={conditions} />
      <Icon img={img} />
      <Time time={time} />
    </div>
  );
};

export default Card;
