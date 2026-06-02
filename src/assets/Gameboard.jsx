export default function Gameboard({onSelectSquare, initialGameBoard, turns}) {

    const gameBoard = initialGameBoard.map(row => [...row]);

    for(const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}><ol>{row.map((playerSymbol, columnIndex) => <li key={columnIndex}><button disabled={playerSymbol} onClick={() => onSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button></li>)}</ol></li>)}
        </ol>
    )
}