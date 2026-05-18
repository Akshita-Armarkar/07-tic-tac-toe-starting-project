import Player from './assets/Player.jsx';
function App() {
  return (
   <main>
    <div id="game-container">
      <ol id="players">
          <Player playerName="akshita" playerSymbol="X"/>
          <Player playerName="Ashish" playerSymbol="O"/>
      </ol>
    </div>
   </main>
  )
}

export default App
