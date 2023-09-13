import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedCountries, setHandleVisitedCountries]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    }
    ,[])
    const handleVisitedCountry=country=>{
        console.log('add to visited country') 
        const newVisitedCountries= [...visitedCountries, country]
        setHandleVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div>
            <h3>countries: </h3>
            <div>
                <h4>Visited countries:{visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>{country.name.common}</li>
                        )
                    }
                </ul>
            </div>
            <div className="countries">
            {
                countries.map(country=> <Country key={country.cca3} handleVisitedCountry={()=>handleVisitedCountry(country)} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;