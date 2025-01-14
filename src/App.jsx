import Dice from "./dice"
import { useState  } from "react";
import Confetti from 'react-confetti'


function App() {
  const [numbers, setNumbers] = useState(generateNumbers());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const allHeld = numbers.every(item => item.isHeld);
  const sameValue = numbers.every(item => item.value === numbers[0].value);
  const gameWon = sameValue && allHeld;


  const diceElements = numbers.map(item => (
      <Dice 
      key={item.id}
      id={item.id}
      number={item.value}
      isHeld={item.isHeld}
      action={hold} 
      />
  ))


  function generateNumbers() {
    const diceNumbers = []
    for (let i = 0; i < 10; i++) {
      const random = Math.ceil(Math.random() * 6)
      diceNumbers.push({ id: i, value: random, isHeld: false })
    }
    return diceNumbers
  }

  function rollDice() {
    setNumbers(oldDice => oldDice.map(
      dice => dice.isHeld ? dice : {...dice, value: Math.ceil(Math.random() * 6)}
    ))
  }

  function checkGameState(values){
      
      const allHeld = values.every(item => item.isHeld);
      const firstValue = values[0].value
      const sameValue = values.every(item => item.value === firstValue);

      if(sameValue && allHeld){
        setGameWon(true)
      }
  }

function hold(id){
  setNumbers((prevValues) => 
    prevValues.map((item) => 
      item.id === id ? { ...item, isHeld: !item.isHeld } : item
    )
  )
}


const confettiView = () => {
  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
    />
  )
}

  return (
    <main className="main-container">
      {gameWon && (
        <Confetti/>
      )}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="board-component">
      {diceElements}
      </div>
      <button onClick={rollDice}>{gameWon ? "New Dice" : "Roll"}</button>
    </main>
  )
}

export default App
