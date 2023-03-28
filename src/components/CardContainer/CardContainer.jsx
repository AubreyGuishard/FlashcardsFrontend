import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
const CardContainer = ({activeCollectionId}) => {
  const [cards, setCards] = useState([]);
  console.log(cards)

  async function fetchCardsForCollection() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${activeCollectionId}/cards/`
    );
    setCards(response.data);
  }

  useEffect(() => {
    fetchCardsForCollection()
  }, [activeCollectionId])
  return <div></div>;
};

export default CardContainer;
