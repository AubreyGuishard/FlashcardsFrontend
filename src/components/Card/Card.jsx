import React from 'react';
const Card = ({card}) => {
    return ( 
        <div>
            {card.word} {card.definition}
        </div>
     );
}
 
export default Card;