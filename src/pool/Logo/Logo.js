import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/assets/images/pool-logo.png" alt="klaktech logo" />
    </div>
  );
};

export default Logo;
