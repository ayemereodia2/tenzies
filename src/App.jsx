import Dice from "./dice"
import { useState  } from "react";

function App() {
  const [numbers, setNumbers] = useState(generateNumbers());

  //console.log(numbers.length)
  const diceElements = numbers.map(item => (
      <Dice 
      key={item.id}
      id={item.id}
      number={item.value}
      isHeld={item.isHeld}
      action={hold} 
      />
  ))

  return (
    <main className="main-container">
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="board-component">
      {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )

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
  /*
  setNumbers(() => {
      let nums = generateNumbers()
      const heldNumbers = numbers.filter(item => item.isHeld);
      nums = nums.map(num => {
        const heldItem = heldNumbers.find(held => held.id === num.id); // Find matching object by id
        return heldItem ? heldItem : num; // Replace if found, otherwise keep the original
      });
     
      return nums
    });
  */

  function hold(id){
    setNumbers((prevValues) => 
      prevValues.map((item) => 
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    )
  }
}

export default App
