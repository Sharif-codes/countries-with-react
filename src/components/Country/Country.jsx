import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags,population,area,cca3}= country

    const [visited, setVisited]= useState(false)
    const handleVisit=()=>{
        setVisited(!visited)
    }
    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited? 'purple': 'black'}}>Country: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p>area: {area}</p>
            <p>code: {cca3}</p>
            <button onClick={handleVisitedCountry}>Mark visited</button>
            <button onClick={handleVisit}>{visited? "visited":"Going" }</button>
        </div>
    );
};

export default Country;