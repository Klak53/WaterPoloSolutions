import styles from "./Switch.module.scss";

const Switch = ({ checked, onClick, disabled }) => {
  return (
    <div
      tabIndex={0}
      className={`${styles.switch} ${checked ? styles.switch__checked : undefined} ${disabled ? styles.switch__disabled : undefined}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    />
  );
};

export default Switch;
