import React from "react";
import './Tictactoe.css'
import { Board } from "./Board";
import { useState } from "react";

const initialBoard=['','','','','','','','',''];

export const TicTacToe =()=>{
    const[gameState, setGameState]= useState(initialBoard);
    const[isXTurn, setIsXTurn] = useState(true);
    
    const onSquareClick =(index)=>{
        let strings = Array.from(gameState);
        if(strings[index] !== ''){
            return;
        }
        
    }

    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState}/>
        </div>
    );
}