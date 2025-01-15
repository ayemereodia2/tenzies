import Dice from "./dice"
import { useEffect, useState, useRef  } from "react";
import Confetti from 'react-confetti'


function App() {
  const [numbers, setNumbers] = useState(() => generateNumbers());
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  const allHeld = numbers.every(item => item.isHeld);
  const sameValue = numbers.every(item => item.value === numbers[0].value);
  const gameWon = sameValue && allHeld;
  const buttonRef = useRef(null); 

  const diceElements = numbers.map(item => (
      <Dice 
      key={item.id}
      id={item.id}
      number={item.value}
      isHeld={item.isHeld}
      action={hold} 
      />
  ))

  useEffect(() => {
      if(gameWon){
        buttonRef.current.focus();
      }
  }, [gameWon])


  function generateNumbers() {
    const diceNumbers = []
    for (let i = 0; i < 10; i++) {
      const random = Math.ceil(Math.random() * 6)
      diceNumbers.push({ id: i, value: random, isHeld: false })
    }
    return diceNumbers
  }

  function resetForNewGame() {
    setNumbers(generateNumbers());
  }

  function rollDice() {
    setNumbers(oldDice => oldDice.map(
      dice => dice.isHeld ? dice : {...dice, value: Math.ceil(Math.random() * 6)}
    ))
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
      <div aria-live="polite" className="sr-only">
        {gameWon && <p>Congratulations you won, Press New Game to start again</p>}
      </div>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="board-component">
      {diceElements}
      </div>
      <button ref={buttonRef} onClick={ gameWon ? resetForNewGame : rollDice }>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  )
}

export default App
