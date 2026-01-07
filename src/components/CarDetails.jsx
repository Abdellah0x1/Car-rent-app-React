import {useParams,useNavigate} from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { BsFillFuelPumpFill,BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";





import styles from './CarDetails.module.css'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"


function CarDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageIndex,setImageIndex] = useState(0);

    useEffect(function(){
        async function getCar(){
            try {
                setIsLoading(true);
                const request = await fetch(`http://localhost:8000/cars/${id}`);
                const data = await request.json();
                setCar(data);
            } catch {
                console.error("error fetching car info");
            }finally {
                setIsLoading(false)
            }
        }
        getCar();
    },[id])

    function nextSlide(){
        setImageIndex(imageIndex => imageIndex === car.Images.length -1 ? 0 : imageIndex + 1 );
    }

    function prevSlide(){
        setImageIndex(imageIndex => imageIndex === 0 ? car.Images.length -1 : imageIndex -1)
    }

    if(isLoading) return <p>LOADING...</p>;
    if(!car) return <p>Car not found!</p>;

    return (
        <>
            <Navbar/>
            <main className={styles.container}>
                <button className={styles.backBtn} onClick={()=>navigate(-1)}>Back <IoIosArrowRoundBack />
                </button>
                <div className={styles.grid}>
                    <div className={styles.slider}>
                        <div className={styles.mainImageWrapper}>
                            <img className={styles.mainImg} src={car.Images[imageIndex]} alt={car.Title}/>
                            {car.Images.length > 1 && 
                            <>
                                <button className={`${styles.sliderBtn} ${styles.right}`} onClick={nextSlide}><GoArrowRight/></button> 
                                <button className={`${styles.sliderBtn} ${styles.left}`} onClick={prevSlide}><GoArrowLeft/></button> 
                            </>
                            }
                        </div>

                        {/* thumbnails */}

                        <div className={styles.gallery}>
                            {car.Images.map((img,i)=> 
                                <img className={`${styles.thumb} ${i === imageIndex ? styles.activeThumb : ""}`} key={i} src={img} alt="thumb" onClick={()=>setImageIndex(i)}/>
                            )}
                        </div>
                    </div>
                    {/* info section */}
                    <div className={styles.infoSection}>
                            <h1>{car.Title}</h1>
                            <h2 className={styles.price}>{car.Price_Value} DH</h2>

                            <div className={styles.badges}>
                                <span><IoMdSettings/> {car.Details?.bv || "Manual"}</span>
                                <span><BsFillFuelPumpFill/> {car.Details?.fuel || "Diesel"}</span>
                                <span><BsCalendarDateFill/> {car.Details?.regdate || "2023"}</span>
                            </div>

                            <p>{car.Description}</p>

                            {/* seller info */}
                            <div className={styles.sellerBox}>
                                <p>Owner: <strong>{car.Seller_Name}</strong></p>
                                <p><FaLocationDot/> {car.Location}</p>
                                <a className={styles.wtspBtn} target="_blank" href={`https://wa.me/212${car.Seller_Phone?.substring(1)}`}><FaWhatsapp/> Chat on WhatsApp</a>
                            </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default CarDetails
