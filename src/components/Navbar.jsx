import styles from './Navbar.module.css'
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
function Navbar() {
    return (
        <div className={styles.nav}>
            <div>
                <Link to="/" >
                    <img src={logo} alt='logo'/>
                </Link>
            </div>

            <div className={styles.main}>
                <Link className={styles.link} to="/Fleet">Catalogue</Link>
                <Link  className={styles.link}  to="/contact">Contact</Link>
                <Link  className={styles.link}  to="/About">About Us</Link>
            </div>

            <div className={styles.actions}>
                <Link  className={styles.link}  to="/login">Login</Link>
                <Link  className={styles.btn}  to="/login">Get Started</Link>
            </div>

        </div>
    )
}

export default Navbar
