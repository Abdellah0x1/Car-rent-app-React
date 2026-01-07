import styles from './Featured.module.css'
import { FaArrowRight } from "react-icons/fa";

import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import CarCard from "./CarCard";

function Featured() {
    const [featured, setFeatured] = useState([]);


    useEffect(function(){
        async function getFeatured(){
            try {
                const request = await fetch("http://localhost:8000/cars");
                const data = await request.json();
                setFeatured(data.filter(car => car.Ad_Type_Key == "LET").slice(0,3));
                console.log(data.filter(car => car.Ad_Type_Key == "LET").slice(0,3));
            }catch {
                console.error("error fetching featured cars");
            }
        }
        getFeatured();
    },[])

    return (
        <div className={styles.featured}>
            <h2>Featured Offers</h2>
            <div className={styles.cars}>
                {featured.map(car => <CarCard car={car} key={car.id} />)}
            </div>
            <Link className={styles.link} to="fleet">
            See More <FaArrowRight />

            </Link>
        </div>
    )
}

export default Featured
