import { useState } from 'react';
const initialGameboard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
];
export default function Gameboard() {
    const [gameBoard, setGameBoard] = useState(initialGameboard);
    const handleSelectSquare = (rowIndex, columnIndex) =>  {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = structuredClone(prevGameBoard)
            console.log(rowIndex, columnIndex)
            updatedBoard[rowIndex][columnIndex] = 'X';
            return updatedBoard;
        })
    }
    return (
        <ol id='game-board'>
        { gameBoard.map((row, rowIndex) => <li key={rowIndex}><ol>{row.map((playerSymbol, columnIndex) => <li key={columnIndex}><button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button></li>)}</ol></li>)}
        </ol>
    )
}