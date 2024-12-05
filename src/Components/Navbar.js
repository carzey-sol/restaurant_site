import React, { useState } from 'react';
import { RiLoginCircleFill } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import styles from './Navbar.module.css';
import Menu from './Menu';

const Navbar = () => {
  const [visible, setVisible] = useState();

  const handleToggle = () => {
    setVisible(prevState => !prevState);
    console.log("clicked")
  }


  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.nav_middle}>
          <img src="/images/cerp1.png" alt="logo" /><a href="/">Hype Hospitality Pvt. Ltd.</a>
        </div>
        <div className={styles.nav_right}>
          <a href='#'><RiLoginCircleFill /></a>
          <a href='#'><IoMdPersonAdd /></a> 
          <div onClick={handleToggle}>
            {visible ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>

      {/* Toggle Menu */}
      {visible && <Menu />}
    </div>
  );
}

export default Navbar;
