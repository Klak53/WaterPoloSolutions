import styles from "./Button.module.scss";

const Button = ({ title, type, wide }) => {
  return (
    <button className={`${styles.button} ${wide ? styles.button__wide : undefined}`} type={type}>
      {title}
    </button>
  );
};

export default Button;
