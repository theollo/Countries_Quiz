import Country from "./Country";

const CountriesList = ({countries}) => {
    const countryComponents = countries.map((country) => <Country key={country.id} country={country} />);
    



    return ( 
        <>
            {countryComponents}
        </>
        
     );
}
 
export default CountriesList;