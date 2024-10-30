import React, { useState, useEffect } from 'react';
import "./Board.css"
import Cell from './Cell';
import findWinner from './FindWinner';
import UserTurn from './UserTurn';
import PopUp from './PopUp';

const Board = ({ sizeCells, isX, toggleStatus, className, winner , setWinner , resetStatus }) => {
    const [cells, setCells] = useState(Array(sizeCells).fill(null))

   
    const handleCickCell = (index) => {
        console.log(index, winner);
        if (winner || cells[index]) return;
        const newCells = [...cells];
        newCells[index] = isX ? "X" : "O";
        //Cap nhat board




        const newWinner = findWinner(newCells, sizeCells);
        setWinner(newWinner);
        setCells(newCells);
        toggleStatus();

    }
    useEffect(() => {
        setCells(Array(sizeCells).fill(null));
    }, [sizeCells,resetStatus]); // Chạy khi cells thay đổi
    const columns = Math.sqrt(sizeCells);
    console.log("So cot hien gio la: ", columns)

    return (
        <div className='container-style-board'>
            <div className={`board-style ${className} columns-${columns}`}>
                {
                    cells.map((value, index) =>
                        <Cell key={index} value={value} onClick={() => handleCickCell(index)} className={value !== null && value === "X" ? "StyleX" : value === "O" ? "StyleO" : " "}></Cell>
                    )
                }

            </div>
            {winner ? <PopUp winnerName={winner}></PopUp> : ""}




        </div>
    );
};

export default Board;