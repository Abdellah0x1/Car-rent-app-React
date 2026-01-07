import styles from './Footer.module.css'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";




function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.col}>
                <Link to="/" >
                    <img className={styles.logo} src={logo} alt='logo'/>
                </Link>
                <p>Your reliable partner for exploring Morocco. From Tanger to Lagouira.</p>
                <ul className={styles.socials}>
                    <li><a target='_blank' href='www.instagram.com'><FaInstagram/></a></li>
                    <li><a target='_blank' href='www.x.com'><FaXTwitter/></a></li>
                    <li><a target='_blank' href='www.youtube.com'><AiOutlineYoutube/></a></li>
                </ul>
            </div>
            <div className={`${styles.col}`}>
                <h3>Quick Links</h3>
                <ul className={styles.links}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fleet">Catalog</Link></li>
                <li><Link to="/favorites ">Favorites</Link></li>
                <li><Link to="/about ">About Us</Link></li>
                </ul>
            </div>
            <div className={styles.col}>
                <h3>Contact</h3>
                <div><MdOutlinePhone/> 0619330517</div>
                <div><MdAlternateEmail/> support@draiveaway.com</div>
            </div>
        </div>
    )
}

export default Footer
