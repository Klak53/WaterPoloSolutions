import { useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import styles from "./FloatingPanel.module.scss";

export const FloatingPanelCard = ({ title, children }) => {
  return (
    <div className={styles.floating_panel__card}>
      <h5 className={styles.floating_panel__card__title}>{title}</h5>
      <div className={styles.floating_panel__card__element}>{children}</div>
    </div>
  );
};

export const FloatingPanelFooter = ({ children }) => {
  return <div className={styles.floating_panel__footer}>{children}</div>;
};

const FloatingPanel = ({ id, icon, title, footer, forwarderRef, visible, close, children }) => {
  const dragControls = useDragControls();

  const handleFocus = () => {
    const panels = document.querySelectorAll("[class*='FP']");

    let currentIndex = 0;

    panels.forEach((panel) => {
      const index = parseInt(panel.style.zIndex);
      currentIndex = index >= currentIndex ? (currentIndex = index + 1) : currentIndex;
    });

    document.getElementById(id).style.zIndex = currentIndex;
  };

  useEffect(() => {
    handleFocus();
  }, [visible]);

  return (
    <motion.div
      drag
      dragConstraints={forwarderRef}
      dragMomentum={false}
      dragElastic={0}
      dragControls={dragControls}
      dragListener={false}
      onMouseDown={() => handleFocus()}
      id={id}
      className={`${styles.floating_panel} FP`}
      style={{ display: visible ? "initial" : "none" }}
    >
      <div className={styles.floating_panel__header} onPointerDown={(e) => dragControls.start(e)}>
        <h4 className={styles.floating_panel__title}>
          {icon} {title}
        </h4>
        <div className={styles.floating_panel__close} tabIndex={0} onClick={close} onKeyDown={(e) => e.key === "Enter" && close()}>
          <FaTimes />
        </div>
      </div>
      <div className={styles.floating_panel__content}>{children}</div>
    </motion.div>
  );
};

export default FloatingPanel;
