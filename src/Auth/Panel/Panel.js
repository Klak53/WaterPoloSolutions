import { motion } from "framer-motion";

import styles from "./Panel.module.scss";

import Logo from "../../shared/components/Logo/Logo";

export const Divider = () => {
  return <span className={styles.divider}>or</span>;
};

const Panel = ({ title, subtitle, children }) => {
  return (
    <motion.div
      key={title}
      initial={{ x: "110%" }}
      animate={{ x: 0 }}
      exit={{ x: "110%", transition: { delay: 0.1 } }}
      transition={{
        duration: 0.25,
      }}
      className={styles.panel}
    >
      <div className={styles.panel__body}>
        <div className={styles.panel__header}>
          {title && <h2 className={styles.panel__title}>{title}</h2>}
          {subtitle && <p className={styles.panel__subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.panel__content}>{children}</div>
        <div className={styles.panel__footer}>
          <a href="http://klaktech.com" target="__blank" className={styles.panel__logo}>
            <Logo wordmark type="positive" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Panel;
