import Country from "./Country";

const CountriesList = ({countries}) => {
    const countryComponents = Object.values(countries).map((country) => {
        return <Country country={country} />
    });
    return ( 
        <>
        {countryComponents}
        </>
        
     );
}
 
export default CountriesList;