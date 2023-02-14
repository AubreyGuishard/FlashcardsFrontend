import React from "react";
import Card from "../Card/Card";
const CardContainerCollection = ({ cards }) => {
  function buildFlashCards() {
    return cards.map(function (card) {
      return <Card card={card}/>;
    });
  }

  return <div>{buildFlashCards()}</div>;
};

export default CardContainerCollection;
