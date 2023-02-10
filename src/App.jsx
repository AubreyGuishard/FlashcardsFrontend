import React, { useEffect, useState } from "react";
import axios from "axios";
import Collection from "./components/Collection/Collection";
import CollectionContainer from "./components/CollectionContainer/CollectionContainer";
// import React from "react";

function App() {
  const [cardCollections, setCardCollections] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchFlashCardCollections();
  },[]);

  async function fetchFlashCardCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCardCollections(response.data);
  }

  async function fetchCardsForCollection(collectionId) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionId}/cards/`
    );
    setCards(response.data);
  }
  console.log(cards)
  return (
    <div>
      <CollectionContainer
        collections={cardCollections}
        fetchCards={fetchCardsForCollection}
      />
    </div>
  );
}

export default App;
