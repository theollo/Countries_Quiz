import { useState } from "react";

const PlayerForm = ({createPlayer}) => {
    const [newPlayerName, setNewPlayerName]= useState("");

    
    const handleChange = (event) => {
        setNewPlayerName(event.target.value);
    }

    const handleFormSubmit =(event) => {
        event.preventDefault();
        createPlayer(newPlayerName);
    }
    
    
    return (  
        <>
        

        
     <form onSubmit={handleFormSubmit}>
        <input
        type="text"
        name="name"
        placeholder="Enter Username"
        value={newPlayerName}
        onChange={handleChange}
        />
        <button type="submit">Create new player</button>
    </form>
        
        </>
    );
}
 
export default PlayerForm;