import { FaCog } from "react-icons/fa";

import FloatingPanel, {
  FloatingPanelCard,
} from "../../shared/components/FloatingPanel/FloatingPanel";
import Switch from "../../shared/components/Switch/Switch";

import { useApp } from "../../shared/contexts/AppContext";
import { usePool } from "../../shared/contexts/PoolContext";

const GraphicSettings = ({ forwarderRef }) => {
  const { graphicSettings, setGraphicSettings } = useApp();
  const { waves, setWaves, ripples, setRipples, shadows, setShadows } =
    usePool();

  return (
    <FloatingPanel
      id="graphicSettings"
      icon={<FaCog />}
      title="graphic settings"
      forwarderRef={forwarderRef}
      visible={graphicSettings}
      close={() => setGraphicSettings(false)}
      footer="This effects are only visible on the screen and as such they are not affecting the screenshots but turning them off can improve performance on the low end devices"
    >
      <FloatingPanelCard title="waves">
        <Switch checked={waves} onClick={() => setWaves(!waves)} />
      </FloatingPanelCard>

      <FloatingPanelCard title="ripples">
        <Switch checked={ripples} onClick={() => setRipples(!ripples)} />
      </FloatingPanelCard>

      <FloatingPanelCard title="shadows">
        <Switch checked={shadows} onClick={() => setShadows(!shadows)} />
      </FloatingPanelCard>
    </FloatingPanel>
  );
};

export default GraphicSettings;
