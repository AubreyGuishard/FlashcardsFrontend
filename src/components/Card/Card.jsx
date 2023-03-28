import React, { useEffect, useState } from "react";
const Card = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(){
        setIsFlipped(!isFlipped)
    }

    useEffect(() => {
        setIsFlipped(false)
    }, [card])
  return card && <div onClick={handleClick}>{isFlipped ? card.definition : card.word}</div>;
};

export default Card;
