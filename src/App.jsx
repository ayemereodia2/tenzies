import Dice from "./dice"

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9,0]

  const dices = numbers.map(item => (
      <Dice key={item} number={item} />
  ))

  return (
    <main className="main-container">
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="board-component">
      {dices}
      </div>
      <button>Roll</button>
    </main>
  )
}

export default App
