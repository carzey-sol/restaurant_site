import styles from './Footer.module.css'
import { FaAndroid } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { TbReservedLine } from "react-icons/tb";
import { MdEvent } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
const Footer = () => {
  return (
    <div className={styles.mainmodule}>
        <div className={styles.namemodule}><img src='/images/cerp1.png' /><h1>HYPE NEPAL HOSPITALITY PVT LTD</h1></div>
        <div className={styles.namemodule}>
          <p>Menu</p>
          <div className={styles.footermenu}>
            <span><Ri24HoursFill />Hours and Location</span>
            <span><TbReservedLine />Reservation</span>
            <span><MdEvent />Private Events</span>
            <span><FaPhotoVideo />Gallery</span>
            <span> <MdFastfood />Online order</span>
            <span><MdOutlineConnectWithoutContact />Contact us</span>
            <span><IoShareSocial />Social media</span> 
          </div>
          </div>
        <div className={styles.namemodule}>
          <p>Info</p>
          <div className={styles.footermenu}>
            <span><FaInfo />About us</span>
            <span><MdConnectWithoutContact />Contact Us</span>
            <span><MdPrivacyTip />Privacy Policy</span>
            <span><FaQuestionCircle />FAQ</span>
          </div>
          </div>
        <div className={styles.namemodule}>
          <p>Contact</p>
          <div className={styles.footermenu}>
            <span><FaLocationArrow />Birtamode-04, Jhapa</span>
            <span><FaPhone />9806095770</span>
            <span><MdAttachEmail />contact@crystalsolution.com.np</span>
          </div>
          </div>
        <div className={styles.namemodule}>
          <p>Downloads</p>
          <div className={styles.footermenu}>
            <span><FaAndroid />Android</span>
            <span><FaAppStoreIos />Ios</span>
          </div>
          </div>
    </div>
  )
}

export default Footer