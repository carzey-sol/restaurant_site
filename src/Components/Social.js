import styles from './Social.module.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const Social = () => {
  return (
    <div className={styles.social}>
        <h1>Find us on social media!</h1>
        <div className={styles.list}>
                <span><a href='#'>Facebook</a><FaFacebook /></span>
                <span><a href='#'>Instagram</a><AiFillInstagram /></span>
                <span><a href='#'>YouTube</a><FaYoutube /></span>
        </div>
    </div>
  )
}

export default Social