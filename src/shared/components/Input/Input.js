import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "./Input.module.scss";

const Input = ({ id, type, placeholder }) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.input}>
      <input
        className={`${styles.input__element} ${isPassword ? styles.input__element__password : undefined}`}
        id={id}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        autoComplete="on"
      />
      {isPassword && (
        <div tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setShowPassword(!showPassword)} className={styles.input__show_password} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};

export default Input;
