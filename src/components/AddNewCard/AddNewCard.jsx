import React, { useState } from "react";
import axios from "axios";

const AddNewCard = ({ getFlashCards, cardId }) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  async function addNewCard(newCard) {
    let url = `http://127.0.0.1:8000/api/collections/${cardId}/cards/`;
    let response = await axios.post(url, newCard);
    if (response.status === 201) {
      getFlashCards(cardId);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newCard = {
      word,
      definition,
    };
    addNewCard(newCard);
    setWord("");
    setDefinition("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Card</h3>
      <h4>
      <div>
        <label>Word </label>
        <input
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
      </div>
      </h4>
      <div>
      <h4>
        <div>
            <label>Definition </label>
            <input type="text" onChange={(e) => setDefinition(e.target.value)} value={definition}/>
        </div>
      </h4>
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddNewCard;
