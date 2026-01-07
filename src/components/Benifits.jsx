import BenifitItem from "./BenifitItem"
import styles from './Benifits.module.css' 

import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineVerifiedUser,MdOutlineSupportAgent } from "react-icons/md";





function Bentifits() {
    return (
        <div className={styles.container}>
            <h2>Why Choose Us?</h2>
        <div className={styles.benifits}>
            <BenifitItem  title="Best Prices" description="We compare deals from top Moroccan agencies.">
                <GiMoneyStack style={{backgroundColor:"#ffeaeaff", color:"#FF9A9A"}} className={styles.logo} />
            </BenifitItem>
            <BenifitItem  title="Verified Sellers" description="All cars are inspected.">
                <MdOutlineVerifiedUser style={{backgroundColor:"#d6f2c7ff", color:"rgba(69, 180, 4, 1)"}} className={styles.logo} />
            </BenifitItem>
            <BenifitItem  title="24/7 Support:" description="We are here when you need us.">
                <MdOutlineSupportAgent style={{backgroundColor:"#d2f8fcff", color:"#08b5eeff"}} className={styles.logo} />
            </BenifitItem>
        </div>
        
        </div>
    )
}

export default Bentifits
