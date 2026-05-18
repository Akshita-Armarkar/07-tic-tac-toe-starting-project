import { useState } from 'react';
export default function Player({playerName, playerSymbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const editInput = () => {
        setIsEditing(true);
    }
    return (
        <li>
          <span className="player">
            {isEditing ? (<input />) :  (<span className="player-name">{playerName}</span>)}
            <span className="player-symbol">{playerSymbol}</span>
          </span>
          <button onClick={editInput}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}