import styles from "./Menus.module.scss";

import TopMenu from "./TopMenu/TopMenu";
import LeftMenu from "./LeftMenu/LeftMenu";

const Menus = () => {
  return (
    <div className={styles.menus}>
      <TopMenu />
      <LeftMenu />
    </div>
  );
};

export default Menus;
