import styles from './CarCard.module.css'

import {useNavigate} from "react-router-dom"

function CarCard({car}) {
    const navigate = useNavigate();

    return (
            <div className={styles.card} onClick={()=>navigate(`/fleet/${car.id}`)}>
                <div className={styles.seller_info}>
                    <img src={car.Seller_Image}/>
                    <span>{car.Seller_Name}</span>
                </div>
                <img className={styles.car_img} src={car.Images[0]}/>
                <div className={styles.card_body}>
                    
                    <h3>{car.Title}</h3>

                    <span className={styles.price}>{car.Price_Value != "N/A" ? car.Price_Value + "DH" : ""}</span>
                </div>
            </div>
    )
}

export default CarCard
