import { useState, cloneElement, Children } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

import styles from "./Menu.module.scss";

export const MenuItem = ({ icon, description, onClick, active, menuOpen }) => {
  return (
    <div tabIndex={menuOpen ? 0 : -1} className={`${styles.menu_item} ${active ? styles.menu_item__active : undefined}`} onClick={onClick} onKeyDown={(e) => e.key === "Enter" && onClick()}>
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
    <div className={`${styles.menu} ${styles[`menu__${side}`]} ${open ? styles.menu__open : undefined}`}>
      {Children.map(children, (child) => cloneElement(child, { menuOpen: open }))}
      <div tabIndex={0} className={styles.menu__close} onClick={() => setOpen(!open)} onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Menu;
