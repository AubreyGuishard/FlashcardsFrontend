import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
const CardContainer = ({activeCollectionId}) => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0)

  const activeCard = cards[index]
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
  return <div>
    <div>1/5</div>
    <div>
      <button>PREV</button>
      <Card card={activeCard}/>
      <button>NEXT</button>
    </div>
  </div>;
};

export default CardContainer;
