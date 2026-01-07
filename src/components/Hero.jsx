import styles from './Hero.module.css'
import Illustration from './Illustration'
import {Link} from "react-router-dom"

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h2>Rent the Perfect Car for Every Journey</h2>
                <p>Choose from a wide range of reliable, modern vehicles at affordable prices.
Fast booking, flexible dates, and 24/7 customer support — all in one place.</p>
                <Link to="fleet">Explor Our Cars</Link>
            </div>
            <Illustration/> 

        </div>
    )
}

export default Hero
