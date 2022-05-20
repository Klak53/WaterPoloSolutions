import { useState } from "react";
import { FaCheck } from "react-icons/fa";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, label, name, checked }) => {
  const [isChecked, setIsChecked] = useState(checked ? true : false);

  return (
    <label
      htmlFor={name}
      className={styles.checkbox}
      tabIndex="0"
      onKeyDown={(e) => e.key === "Enter" && setIsChecked(!isChecked)}
    >
      <input type="checkbox" id={id} name={name} checked={isChecked} />
      <div
        className={styles.checkbox__mark}
        onClick={() => setIsChecked(!isChecked)}
      >
        <FaCheck />
      </div>
      <div
        className={styles.checkbox__label}
        onClick={() => setIsChecked(!isChecked)}
      >
        {label}
      </div>
    </label>
  );
};

export default Checkbox;
