import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./HorizontalPicker.module.scss";

const HorizontalPicker = ({ left, right, content, disabledLeft, disabledRight }) => {
  return (
    <div className={styles.horizontal_picker}>
      <div className={styles.horizontal_picker__content}>{content}</div>
      <div
        tabIndex={disabledLeft ? -1 : 0}
        className={`${styles.horizontal_picker__left} ${disabledLeft ? styles.horizontal_picker__disabled : undefined}`}
        onClick={left}
        onKeyDown={(e) => e.key === "Enter" && left()}
      >
        <FaChevronLeft />
      </div>
      <div
        tabIndex={disabledRight ? -1 : 0}
        className={`${styles.horizontal_picker__right} ${disabledRight ? styles.horizontal_picker__disabled : undefined}`}
        onClick={right}
        onKeyDown={(e) => e.key === "Enter" && right()}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default HorizontalPicker;
