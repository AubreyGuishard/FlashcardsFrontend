import React, { useEffect, useState } from "react";
import axios from "axios";
import Collection from "./components/Collection/Collection";
import CollectionContainer from "./components/CollectionContainer/CollectionContainer";
import Header from "./components/Header/Header";
import CardContainerCollection from "./components/CardContainer/CardContainer";
import CardContainer from "./components/CardContainer/CardContainer";
// import React from "react";

function App() {
  const [cardCollections, setCardCollections] = useState([]);
  const [activeCollectionId, setActiveCollectionId] = useState(1);
  console.log("Active Collection Id:", activeCollectionId)
  
  useEffect(() => {
    fetchFlashCardCollections();
  }, []);

  async function fetchFlashCardCollections() {
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCardCollections(response.data);
  }

  return (
    <div>
      <Header />
      <CollectionContainer
        collections={cardCollections}
        activeCollectionId={activeCollectionId}
        setActiveCollectionId={setActiveCollectionId}
      />
      <CardContainer activeCollectionId={activeCollectionId}/>
    </div>
  );
}

export default App;
