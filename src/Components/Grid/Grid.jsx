import { useState } from "react";
import Card from "../Cards/Card";
import './Grid.css'
import isWinner from "../../Helpers/Helper";

function Grid ({numberOfCards}){
    const [board , setBoard ] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn]  = useState(true);
     const [winner,setWinner] = useState(null);

    function play (index){
        if (turn == true){
            board[index]= "0";
        }
        else {
            board[index]= "X";
        }

        const win  = isWinner(board , turn ? "0" : "X")
        
        if (win){
            setWinner(win)
        }
        setBoard([...board]);
        setTurn(!turn);

    }

    function reset (){
        setTurn(true)
        setWinner(null)
        setBoard(Array(numberOfCards).fill(""))
    }
    return (
        <div className="grid-wrapper">
        {
            winner && (
                <> <h1 className="turn-on"> Winner is {winner}</h1>
                <button className="reset" onClick={reset} >Reset game</button>

                </>
            )
        }
        <h1 className="turn-highlight">Current turn : {(turn ?'0' : 'X')} </h1>
        <div className = "grid">
       
       {board.map((el,idx) => <Card key = {idx} onPlay = {play} Player={el} index = {idx} gameEnd = {winner ? true : false}/>)}
        </div>
        </div>
    )
}
export default Grid