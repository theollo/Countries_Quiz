import {useEffect, useState} from "react";
import Country from "../Components/Country";
import CountriesList from "../Components/CountriesList";
 
const SERVER_URL = "http://localhost:8080";
const ContinentContainer=() => {
    const [continents, setContinents] = useState([]);
    const [countries, setCountries] = useState([]);
    const [guessedCountries, setGuessedCountries] = useState([]);
    const [games, setGames] = useState(null);

    const getAllCountries = async () => {
        const response = await fetch("http://localhost:8080/countries");
        const data = await response.json();
        console.log("From container", data)
        setCountries(data);
    }


    useEffect(() => {
         getAllCountries()
         }, [])
    


    return ( 
        <>
        <CountriesList countries = {countries}/>
        </>
        

    );
}
 
export default ContinentContainer;