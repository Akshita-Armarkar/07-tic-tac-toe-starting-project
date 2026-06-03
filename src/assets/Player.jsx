import { useState } from 'react';
export default function Player({playerName, playerSymbol, isActive, onChangeName}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerNameNew, setPlayerNameNew] = useState(playerName)
    const editInput = () => {
        setIsEditing(prevValue => !prevValue);
        if(isEditing) {
        onChangeName(playerSymbol, playerNameNew)
        }
    }
    return (
      <>
        <li className={isActive ? 'active' : ''}>
          <span className="player">
            {isEditing ? (<input required defaultValue={playerNameNew} value={playerNameNew} onChange={e => setPlayerNameNew(e.target.value)}/>) :  (<span className="player-name">{playerNameNew}</span>)}
            <span className="player-symbol">{playerSymbol}</span>
          </span>
          <button onClick={editInput}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
        </>
    )
}