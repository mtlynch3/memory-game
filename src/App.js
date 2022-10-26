import './App.css';
import Card from './components/Card'

import React, { useState } from 'react';


function App() {
  const [countFlipped, setCountFlipped] = useState(0);
  const [choices, setChoices] = useState([]);
  const [numMatched, setNumMatched] = useState(0);


  const handleCountFlipped = (isFlipped) => (isFlipped ? setCountFlipped(countFlipped-1) : setCountFlipped(countFlipped+1));

  const handleChoices = (chosenCardText) => (setChoices([...choices, chosenCardText]));

  const cardValues = [{id:1,src:"img1"}, {id:2,src:"img2"}, {id:3,src:"img1"}, {id:4,src:"img2"}];
  console.log(countFlipped, choices);

  if (countFlipped === 2) {
    if (choices[0].src === choices[1].src){
      setNumMatched(numMatched+1);
    }
    setChoices([]);
    setCountFlipped(0);
  }
  return (
    <div className="App">
      {cardValues.map(item=>(
        <Card key={item.id} cardText={item.src} 
              handleCountFlipped={handleCountFlipped}
              handleChoices={handleChoices}
              /> 
      ))}
    </div>
  );
}

export default App;
