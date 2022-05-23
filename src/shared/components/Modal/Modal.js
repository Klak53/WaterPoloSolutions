import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import styles from "./Modal.module.scss";

const Modal = ({ icon, title, className, children, close = true }) => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { duration: 0.25 } }}
          exit={{ y: "-100vh", transition: { duration: 0.25, delay: 0.25 } }}
          className={`${styles.modal} ${className ? className : undefined}`}
        >
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0, transition: { duration: 0.25, delay: 0.25 } }}
            exit={{ y: "-100vh", transition: { duration: 0.25 } }}
            className={styles.modal__body}
          >
            <div className={styles.modal__header}>
              <h4 className={styles.modal__title}>
                {icon} {title}
              </h4>
              {close && (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.modal__close}
                  onClick={() => setOpen(false)}
                >
                  <FaTimes />
                </motion.div>
              )}
            </div>
            <div className={styles.modal__content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
