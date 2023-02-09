import React, { useEffect, useState } from 'react';
import axios from "axios";
// import React from "react";

function App() {
const [cardCollections, setCardCollections] = useState([])
const [ getFlutterFlashCards, setFlutterFlashCards] = useState([])
const [getCssFlashCards, setCssFlashCards] = useState([])
const [getPandaFlashCards, setPandaFlashCards] = useState([])  

  async  function fetchFlashCardCollections(){
  const response = await axios.get('http://127.0.0.1:8000/api/collections/');
  setCardCollections(response.data)
}

useEffect(() => {
  fetchFlashCardCollections();
}, []);

console.log('Card Collection:', cardCollections)

async function fetchFlutterFlashCards(){
  const response = await axios.get('http://127.0.0.1:8000/api/collections/1/cards/');
  setFlutterFlashCards(response.data)
}

useEffect(() => {
  fetchFlutterFlashCards();
}, []);

console.log('Flutter Flashcards:', getFlutterFlashCards)

async function fetchCssFlashCards(){
  const response = await axios.get('http://127.0.0.1:8000/api/collections/2/cards/');
  setCssFlashCards(response.data)
}

useEffect (() => {
  fetchCssFlashCards();
}, []);

console.log('CSS Flashcards:', getCssFlashCards)

async function fetchPandaFlashCards(){
  const response = await axios.get('http://127.0.0.1:8000/api/collections/3/cards/');
  setPandaFlashCards(response.data)
}

useEffect (() => {
  fetchPandaFlashCards();
}, []);

console.log('Panda Flashcards:', getPandaFlashCards)

return (
    <div>
     <h3>Hello World</h3>
    </div>
  );
}

export default App;
