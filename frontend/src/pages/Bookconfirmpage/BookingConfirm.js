import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./BookingConfirm.module.css";

const BookingConfirm = () => {
    return(
        <div>
            <Navbar></Navbar>
            <div className={styles.bookcnfmtitle}>
                <span className={styles.bookcnfmtitlespan}>Peter</span>, we’ve sent a booking confirmation to:<br></br><br></br>
                Peter@gmail.com
            </div>
            <div className={styles.rectangle26}></div>
            <div className={styles.rectangle25}></div>
            <div className={styles.bookgroup16}></div>
            <div className={styles.bookframe}></div>
            <button className={styles.btnbookanother}>Book another viewing</button>
            <div className={styles.bookfooter}><Footer></Footer></div>
        </div>
    )
}

export default BookingConfirm;