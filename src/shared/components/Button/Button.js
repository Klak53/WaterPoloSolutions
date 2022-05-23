import styles from "./Button.module.scss";

const Button = ({ icon, title, type, onClick, wide, light, btnStyle }) => {
  return (
    <button
      className={`${styles.button} ${
        btnStyle ? styles[`button__${btnStyle}`] : undefined
      } ${wide ? styles.button__wide : undefined} ${
        light ? styles.button__light : undefined
      }`}
      type={type}
      onClick={onClick}
    >
      {icon} {title}
    </button>
  );
};

export default Button;
