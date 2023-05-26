import { useEffect, useState} from "react";
import Game from "../Components/Game";
import PlayerForm from "../Components/PlayerForm";

const SERVER_URL = "http://localhost:8080";

const PlayerContainer = () => {
    
    const [players,setPlayers] = useState([]);    
    const [game,setGame] = useState([]);    
    const [reply,setReply] = useState(null);    
      
    
const createPlayer = (newPlayerName)=> {
        fetch(`${SERVER_URL}/players`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: newPlayerName}),
        })
        .then((response) => response.json())
        .then((data) => {
            setPlayers([...players, data]);
        });
        }
    



 return (
        <>
        <Game players= {players}/>
        <PlayerForm createPlayer = {createPlayer}/>
        
        
        
        </>


      );
}
 
export default PlayerContainer;