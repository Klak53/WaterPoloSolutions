import { useRef, cloneElement, Children } from "react";
import styles from "./FloatingPanels.module.scss";

import PoolSettings from "./PoolSettings/PoolSettings";
import GraphicSettings from "./GraphicSettings/GraphicSettins";
import ScreenshotSettings from "./ScreenshotSettings/ScreenshotSettings";

const PanelsConstraints = ({ children }) => {
  const panelsConstraintsRef = useRef(null);
  return (
    <div className={styles.floating_panels} ref={panelsConstraintsRef}>
      {Children.map(children, (child) => cloneElement(child, { forwarderRef: panelsConstraintsRef }))}
    </div>
  );
};

const FloatingPanels = () => {
  return (
    <PanelsConstraints>
      <ScreenshotSettings />

      <PoolSettings />
      <GraphicSettings />
    </PanelsConstraints>
  );
};

export default FloatingPanels;
