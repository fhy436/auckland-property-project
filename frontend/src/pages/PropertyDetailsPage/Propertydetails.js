import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styles from "./Propertydetails.module.css";
import react, { useState} from "react";


const Propertydetails = () => {
    
    const [showMore, setshowMore] = useState(false);
    
    const paragh = `The stunning complex was completed early this year providing quality of city living, bringing \
                    elegance and opportunity to a life lived at the centre of everything. \
                    With an open plan, double glazed glass windows line the exterior of this apartment creating \
                    a sense of warmth, light, and space. The kitchen is brand new with high-end appliances and \
                    ample storage. The bedroom is light-filled, with a decent triple-sized wardrobe and built-in \
                    storage. Total floor area approx 96m2. \
                    As a resident, you will love the onsite world-class amenities including a wellness studio, 20- \
                    meter lap pool, outdoor terrace, cinema, 24-hour concierge, and valet service. Positioned in \
                    a thriving downtown location mere minutes' walk to Britomart, Commercial Bay, and the \
                    Viaduct. This apartment offers immediate access to anything you could possibly need. \
                    Indulge in the best bars, restaurants and retail shopping Auckland has on offer.`
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.headerimg}> </div>
            <div className={styles.title}>Gem in the City!</div>
            <div className={styles.address}>15A, 209 Commerce Street, City Centre</div>
            <div className={styles.price}>$600 per week</div>
            <div className={styles.date}>Available 30th June</div>
            <div className={styles.bar}></div>
            <div className={styles.frame5}></div>
            <div className={styles.rectangle14}></div>
            <div className={styles.rectangle13}></div>
            <div className={styles.agent}></div>
            <div className={styles.name}>Vivian Smith</div>
            <div className={styles.email}>VivianS@apm.co.nz</div>
            <button className={styles.apply}>Apply Now </button>
            <button className={styles.book}>Book a Viewing</button>
            <div className={styles.ask}>Ask a Question</div>
            <div className={styles.table}></div>
            <div className={styles.describe}>Property Description</div>
            <div className={styles.paragh}>
                {showMore ? paragh : `${paragh.substring(0, 352)}`}
                <div className={styles.show} onClick={ ()=> setshowMore(!showMore)}>
                    {showMore ? "- Show less" : "+ Show more"}
                    
                </div>
                
            </div>
            <div className={styles.bar1}></div>
            <div className={styles.map}></div>
            <div className={styles.footer}><Footer></Footer></div>
            
            
        </div>
        
    )
}

export default Propertydetails;