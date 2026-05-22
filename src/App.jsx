import Player from './assets/Player.jsx';
import Gameboard from './assets/Gameboard.jsx'
function App() {
  return (
   <main>
    <div id="game-container">
      <ol id="players">
          <Player playerName="akshita" playerSymbol="X"/>
          <Player playerName="Ashish" playerSymbol="O"/>
      </ol>
      <Gameboard/>
    </div>
   </main>
  )
}

export default App
