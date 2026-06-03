import Player from './assets/Player.jsx';
import Gameboard from './assets/Gameboard.jsx';
import {useState} from 'react';
import Log from './assets/Log.jsx';
import {WINNING_COMBINATIONS} from './assets/WinningCombinations.jsx'
import GameOver from './assets/GameOver.jsx'

const initialGameboard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({'X': 'Akshita', 'O': 'Ashish'})

  const deriveWinner = (gameTurns, players) => {
      let winner;
      for(const combinations in WINNING_COMBINATIONS) {
        const [firstSquare, secondSquare, thirdSquare] = WINNING_COMBINATIONS[combinations];
        const firstSquarePlayer = gameTurns.find(turn => turn.square.row === firstSquare.row && turn.square.col === firstSquare.column)?.player;
        const secondSquarePlayer = gameTurns.find(turn => turn.square.row === secondSquare.row && turn.square.col === secondSquare.column)?.player;
        const thirdSquarePlayer = gameTurns.find(turn => turn.square.row === thirdSquare.row && turn.square.col === thirdSquare.column)?.player;

        if(firstSquarePlayer && firstSquarePlayer === secondSquarePlayer && firstSquarePlayer === thirdSquarePlayer) {
          winner = players[firstSquarePlayer]
        }
      }

      return winner;
  }

  const winner = deriveWinner(gameTurns, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectionSquare = (rowIndex, columnIndex) => {
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') currentPlayer = 'O';
      const updatedTurns = [{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

  const handleRestart = () => {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, newName) => {
    debugger
    setPlayers(prevPlayers => {
     return { 
      ...prevPlayers,
      [symbol] : newName
     };
    });
  }

  const currentPlayerSymbol = gameTurns.length === 0
    ? 'X'
    : gameTurns[0].player === 'X'
      ? 'O'
      : 'X';

  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
          <Player onChangeName={handlePlayerNameChange} playerName={players['X']} playerSymbol="X" isActive={currentPlayerSymbol === 'X' ? 'active' : null}/>
          <Player onChangeName={handlePlayerNameChange} playerName={players['O']} playerSymbol="O" isActive={currentPlayerSymbol === 'O' ? 'active' : null}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <Gameboard onSelectSquare={handleSelectionSquare} activePlayerSymbol={currentPlayerSymbol} initialGameBoard={initialGameboard} turns={gameTurns}/>
    </div>
    <Log gameTurns={gameTurns}/>
   </main>
  )
}

export default App
