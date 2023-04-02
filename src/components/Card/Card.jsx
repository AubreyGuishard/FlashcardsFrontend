import React, { useEffect, useState } from "react";
const Card = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(){
        setIsFlipped(!isFlipped)
    }

    useEffect(() => {
        setIsFlipped(false)
    }, [card])
  return card && <h3 onClick={handleClick}>{isFlipped ? card.definition : card.word}</h3>;
};

export default Card;
