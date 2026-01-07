import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";


import CarCard from "../components/CarCard"

import styles from './Fleet.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Search from "../components/Search"

function Fleet() {
    const [cars, setCars] = useState([]);
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [sideBar, setSideBar] = useState(false);


    const currentTransmission = searchParams.get("transmission") || "all";
    const cityFilter = searchParams.get("city") || "all";
    const minPrice = searchParams.get("minPrice") || 0;
    const maxPrice = searchParams.get("maxPrice") || null;

    const displayedCars = cars.filter(car=> {
        const carTransmission =car.Details?.bv?.toLowerCase();
        const matchesCity = (cityFilter === "all") || car.Location.toLowerCase().includes(cityFilter.toLowerCase());
        const matchesTransmission =  carTransmission === currentTransmission || currentTransmission == "all";
        let matchesPrice = true;

        if(car.Price_Value == "N/A") matchesPrice = false
        else if(maxPrice < minPrice) matchesPrice = false;
        else if(minPrice > 0 && maxPrice ) matchesPrice = Number(car.Price_Value) >= minPrice && Number(car.Price_Value) <= maxPrice ;
        else matchesPrice = Number(car.Price_Value) >= minPrice;
        return matchesTransmission && matchesCity && matchesPrice;
    })

    
    useEffect(function(){
        async function getCars(){
            try {
                setIsLoading(true)
                const request = await fetch("http://localhost:8000/cars");
                const data = await request.json();
                setCars(data);
                setIsLoading(false);
            }catch{
                console.error("error fetching cars data")
                
            }finally{
                setIsLoading(false);
            }
        }
        getCars();
    },[])
    return (
        <>
        <Navbar/>
        <button className={styles.fitlerBtn} onClick={()=> setSideBar(true)}><VscSettings/> Filters</button>
        <div className={styles.container}>
            <div className={`${styles.filters} ${sideBar ? styles.open : ""}`}>
                <button onClick={()=>setSideBar(false)} className={styles.closeBtn}><MdOutlineClose/></button>
                <Search />
            </div>
            {sideBar && (
                <div className={styles.overlay} onClick={()=> setSideBar(false)}/>
            )}
            <div className={styles.fleet}>
                {displayedCars.map(car => <CarCard car={car} key={car.id}/>)}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Fleet
