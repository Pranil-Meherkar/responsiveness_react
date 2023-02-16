import React from "react";
import { cardData } from "./../cardData";
import Card from "./Card";

export default function HomePage() {
  return (
    <div>
      <h1 className="heading">Indian Cricketers</h1>
      <div className="container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            imgUrl={data.imgLink}
            name={data.name}
            role={data.role}
          />
        ))}
      </div>
    </div>
  );
}
