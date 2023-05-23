
import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {

  const [squares,setSquares]= useState(Array(9).fill(null));
  const [isNext,setIsNext]=useState(false);
  
  const winner=calculateWinner(squares);
  const nextPlayer =isNext? 'X' : 'O';
  const statusMessage=winner?`Winner is ${winner}`:`Next Player is ${nextPlayer}`;

  const handleSquareClick= clickedPosition =>
  {

      if(squares[clickedPosition]|| winner){
          return;
      }
      setSquares(currentSquares=>{
          return currentSquares.map((squareValue,position)=>{
              if(clickedPosition===position){
                  return isNext?'X':'O';
              }

              return squareValue;
          });
      });

      setIsNext(currentIsNext=> !currentIsNext );
  };
 
  return (
    <div className="app">
     <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
     
    </div>
  );
}

export default App;
