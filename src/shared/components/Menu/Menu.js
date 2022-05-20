import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import styles from "./Menu.module.scss";

export const MenuItem = ({ icon, description, onClick, active }) => {
  return (
    <div
      className={`${styles.menu_item} ${
        active ? styles.menu_item__active : undefined
      }`}
      onClick={onClick}
    >
      <div className={styles.menu_item__icon}>{icon}</div>
      <div className={styles.menu_item__description}>
        <h4 className={styles.menu_item__description__card}>{description}</h4>
      </div>
    </div>
  );
};

const Menu = ({ side, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${styles.menu} ${styles[`menu__${side}`]} ${
        open ? styles.menu__open : undefined
      }`}
    >
      {children}
      <div className={styles.menu__close} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Menu;
