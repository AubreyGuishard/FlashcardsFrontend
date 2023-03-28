import React, { useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
const CardContainer = ({}) => {
  const [cards, setCards] = useState([]);
  async function fetchCardsForCollection(collectionId) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/`
    );
    setCards(response.data);
  }


  return <div></div>;
};

export default CardContainer;
