import React, { useEffect, useState } from 'react';
import "./Game.css"
import Board from './Board';
import UserTurn from './UserTurn';
import ChangeSizeBoard from './ChangeSizeBoard';
import PopUp from './PopUp';
const Game = () => {
    const [isX, setIsX] = useState(true);
    const [size, setSize] = useState(25);
    const [winner, setWinner] = useState(null);
    const [resetStatus, setresetStatus] = useState(false);

    const toggleX = () => {
        setIsX(prev => !prev)
    }
    const handleChangeSize = (newSize) => {
        setSize(Number(newSize));
        console.log(newSize);
        
        
    }
    const handleReset= (() => {
         setWinner(null);
         setresetStatus(!resetStatus);

       
    }
   
    )
    const onClickReset= (()=>{
        setresetStatus(!resetStatus);
    })
    useEffect(()=>{
       console.log("winner is:", winner)
    },[winner])
  
    return (
        <div className='style-board-game'>
            <Board sizeCells={size} isX={isX} toggleStatus={toggleX} className={"style-posision-board"} winner={winner} setWinner={setWinner} resetStatus={resetStatus}></Board>
            <div>


                <UserTurn user={isX ? "X" : "O"} className={isX ? "StyleX" : "StyleO"}></UserTurn>

                <ChangeSizeBoard sizeBoard={handleChangeSize}> </ChangeSizeBoard>
                <div onClick = {onClickReset} className='style-button-reset'>Reset board</div>
            </div>
            {winner ? <PopUp winnerName={winner} onClick = {handleReset}></PopUp> : ""}

        </div>
    );
};

export default Game;