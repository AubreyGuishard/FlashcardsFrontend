import React, { useState } from "react";
const Card = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick(){
        setIsFlipped(!isFlipped)
    }

  return card && <div onClick={handleClick}>{isFlipped ? card.definition : card.word}</div>;
};

export default Card;
