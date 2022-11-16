import './App.css';
import Card from './components/Card'

import React, { useEffect, useState } from 'react';
const cardImages = [
    {src:"A", matched:false}, 
    {src:"B", matched:false}, 
    {src:"C", matched:false}, 
    {src:"D", matched:false}
  ];

function App() {
  const [cards, setCards] = useState([]);
  //const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    resetTurn();
    //setTurns(0);
  }

  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  useEffect(() => {
    if(choiceOne&&choiceTwo) {
      setDisabled(true);
      if(choiceOne.src===choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map (card => {
            if (card.src === choiceOne.src) {
              return {...card, matched:true};
            } else {
              return card;
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)

      }
    }

  }, [choiceOne, choiceTwo]) 

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    //setTurns(prevTurns => prevTurns + 1)
    setDisabled(false);
  }
  //console.log(cards);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <Card key={card.id} card={card}
              handleChoice={handleChoice}
              flipped={card===choiceOne || card===choiceTwo || card.matched}
              disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
