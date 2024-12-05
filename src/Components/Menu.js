import styles from "./Menu.module.css";
import { RxCross1 } from "react-icons/rx";
import { Ri24HoursFill } from "react-icons/ri";
import { TbReservedLine } from "react-icons/tb";
import { MdEvent } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_items}>
       
        <div className={styles.item}>
          <span>
            <Ri24HoursFill />
          </span>

          <p>Hours and Location</p>
        </div>

        <div className={styles.item}>
          <span>
          <TbReservedLine />
          </span>
          <p>Reservation</p>
        </div>

        <div className={styles.item}>
          <span>
          <MdEvent />
          </span>
          <p>Private Events</p>
        </div>

        <div className={styles.item}>
          <span>
          <FaPhotoVideo />
          </span>
          <p>Gallery</p>
        </div>

        <div className={styles.item}>
          <span>
          <MdFastfood />
          </span>
          <p>Online order</p>
        </div>

        <div className={styles.item}>
          <span>
          <MdOutlineConnectWithoutContact />
          </span>
          <p>Contact us</p>
        </div>

        <div className={styles.item}>
          <span>
          <IoShareSocial />
          </span>
          <p>Social Media</p>
        </div>


      </div>
    </div>
  );
};

export default Menu;
