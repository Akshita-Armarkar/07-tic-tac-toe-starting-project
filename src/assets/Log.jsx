export default function log({gameTurns}) {
    return (
        <ol id="log">
            {gameTurns.map( turn => <li key={`${turn.square.row}${turn.square.col}`}>
                {`Square : ${turn.square.row}${turn.square.col}, Player: ${turn.player}`}
            </li>)}
        </ol>
    )
}