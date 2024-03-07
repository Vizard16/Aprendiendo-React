import { useState } from "react"
import confetti from "canvas-confetti"


import { Square } from "./components/Square.jsx"

import { TURNS } from "./constants.js"

import { checkWinnerFrom, checkEndGame } from "./logic/board.js"

import { WinnerModal } from "./components/WinnerModal.jsx"



function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {
    //no actualizamos esta posiciuon si ya tiene algo
    if(board[index] || winner) return 
    // actualizar el tablero
    const newBoard = [ ... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS. X
    setTurn(newTurn)

    // revisar si hay ganador

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner) // actualiza el estado es asincrono. No bloquea la ejecucion de codigo despues
      // si se pusiera un console log aqui nada garantiza que el winner tenga un valor 
    } else if(checkEndGame(newBoard)){

      setWinner(false)//empate
    }//TODO : check if game is over


  }
  return(
    <main className = 'board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className = "game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {/* Aqui va un estado un estado es un valor que cada vez que cambie 
                  vuelve a renderizar nuestro componente*/}
                  {square}

              </Square>

            )
          })
        }

      </section>
      
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

        <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  ) 
  
}

export default App
