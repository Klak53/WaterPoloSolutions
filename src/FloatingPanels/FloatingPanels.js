import { useRef } from "react";
import styles from "./FloatingPanels.module.scss";

import PoolSettings from "./PoolSettings/PoolSettings";
import GraphicSettings from "./GraphicSettings/GraphicSettins";

const FloatingPanels = () => {
  const panelsConstraintsRef = useRef(null);

  return (
    <div className={styles.floating_panels} ref={panelsConstraintsRef}>
      <PoolSettings forwarderRef={panelsConstraintsRef} />
      <GraphicSettings forwarderRef={panelsConstraintsRef} />
    </div>
  );
};

export default FloatingPanels;
