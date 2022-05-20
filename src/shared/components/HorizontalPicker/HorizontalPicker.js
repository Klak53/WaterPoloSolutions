import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import styles from "./HorizontalPicker.module.scss";

const HorizontalPicker = ({ left, right, content, disabledLeft, disabledRight }) => {
  return (
    <div className={styles.horizontal_picker}>
      <div className={styles.horizontal_picker__content}>{content}</div>
      <div className={`${styles.horizontal_picker__left} ${disabledLeft ? styles.horizontal_picker__disabled : undefined}`} onClick={left}>
        <FaChevronLeft />
      </div>
      <div className={`${styles.horizontal_picker__right} ${disabledRight ? styles.horizontal_picker__disabled : undefined}`} onClick={right}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default HorizontalPicker;
