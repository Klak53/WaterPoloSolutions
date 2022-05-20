import styles from "./Form.module.scss";

const Form = ({ title, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {title && <h3 className={styles.form__title}>{title}</h3>}
      {children}
    </form>
  );
};

export default Form;
