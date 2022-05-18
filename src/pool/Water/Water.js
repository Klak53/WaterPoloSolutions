import styles from "./Water.module.scss";

const Water = ({ children }) => {
  return <div className={styles.water}>{children}</div>;
};

export default Water;
