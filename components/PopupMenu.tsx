import React, { useState } from "react";
import styles from "./PopupMenu.module.css";
import { GoVersions } from "react-icons/go";
const PopupMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.popupMenuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
      <GoVersions />
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <a
            href="https://atanu16.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuItem}
          >
            V.1
          </a>
          <a
            href="https://noticee.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuItem}
          >
            V.2
          </a>
          {/* <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer" className={styles.menuItem}>
            V.3
          </a> */}
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
