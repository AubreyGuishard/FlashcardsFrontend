import React from "react";
const Card = ({ card }) => {
  return card && <div>{card.word}</div>;
};

export default Card;
