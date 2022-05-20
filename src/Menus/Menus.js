import styles from "./Menus.module.scss";

import LeftMenu from "./LeftMenu/LeftMenu";

const Menus = () => {
  return (
    <div className={styles.menus}>
      <LeftMenu />
    </div>
  );
};

export default Menus;
