import { useSearchParams } from 'react-router-dom'
import styles from './Search.module.css'
import { useState } from 'react';


function Search() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [city,setCity] = useState("all");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const currentTransmission = searchParams.get("transmission") || "all";



    function handleCity(e){
        setCity(e.target.value)
        const newParams = new URLSearchParams(searchParams);

        if(e.target.value == "all"){
            newParams.delete("city");
        }
        else {
            newParams.set("city",e.target.value)
        }
        setSearchParams(newParams)

    }

    function handleTransmission(filter) {
        const Params = new URLSearchParams(searchParams);

        if (filter == "all"){
            Params.delete("transmission");
        }
        else {
            Params.set("transmission",filter);
        }
        setSearchParams(Params);
    }

    function handleMinPrice(e){
        const newParams = new URLSearchParams(searchParams);
        if(e.target.value == 0) newParams.delete("minPrice");
        setMinPrice(Number(e.target.value));
        newParams.set("minPrice",e.target.value);
        setSearchParams(newParams)
    }

    function handleMaxPrice(e){
        const newParams = new URLSearchParams(searchParams);
        if(e.target.value == 0) newParams.delete("maxPirce");
        setMaxPrice(Number(e.target.value));
        newParams.set("maxPrice", e.target.value);
        setSearchParams(newParams);
    }

    

    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.filter}>
                <label htmlFor="location">location</label>
                <select value={city} onChange={e=>handleCity(e)}>
                    <option value="all">all</option>
                    <option value="Marrakech">Marrakech</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Fès">Fès</option>
                    <option value="Rabat">Rabat</option>
                </select>
            </div>
            <div className={styles.filter}>
                <p>Transmission</p>
                <div className={styles.pillContainer}>
                    <button onClick={()=>handleTransmission("all")} className={currentTransmission == "all" ? styles.activePill : ""}>All</button>
                    <button onClick={()=>handleTransmission("automatique")} className={currentTransmission == "automatique" ? styles.activePill : ""}>Auto</button>
                    <button onClick={()=>handleTransmission("manuelle")} className={currentTransmission == "manuelle" ? styles.activePill : ""}>Manual</button>
                </div>
            </div>
            <div className={styles.filter}>
                <p>Price</p>
                <div className={styles.PriceRange}>
                    <input onChange={(e)=>handleMinPrice(e)} value={minPrice? minPrice : ""} placeholder='min' type='number'/>
                    <input onChange={(e)=>handleMaxPrice(e)} value={maxPrice? maxPrice : ""} placeholder='max' type='number'/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Search
