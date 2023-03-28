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
    setIndex(0)
  }, [activeCollectionId])

  function handlePrev(){
    if (index > 0){
      setIndex(index -1)
    }
  }
  
  function handleNext(){
    if (index < cards.length - 1){
      setIndex(index + 1)
    }

  }
  return <div>
    <div>{index+1}/{cards.length}</div>
    <div>
      <button onClick={handlePrev}>PREV</button>
      <Card card={activeCard}/>
      <button onClick={handleNext}>NEXT</button>
    </div>
  </div>;
};

export default CardContainer;
