import { FaWater } from "react-icons/fa";

import FloatingPanel, { FloatingPanelCard } from "../../shared/components/FloatingPanel/FloatingPanel";
import Switch from "../../shared/components/Switch/Switch";
import HorizontalPicker from "../../shared/components/HorizontalPicker/HorizontalPicker";

import { useApp } from "../../shared/contexts/AppContext";
import { usePool } from "../../shared/contexts/PoolContext";

const PoolSettings = ({ forwarderRef }) => {
  const { poolSettings, setPoolSettings } = useApp();
  const { poolLength, setPoolLength, poolWidth, setPoolWidth, markers, setMarkers, markersDesc, setMarkersDesc, centerLine, setCenterLine, dimensions, setDimensions } = usePool();

  return (
    <FloatingPanel id="PoolSettings" icon={<FaWater />} title="pool settings" forwarderRef={forwarderRef} visible={poolSettings} close={() => setPoolSettings(false)}>
      <FloatingPanelCard title="pool length">
        <HorizontalPicker
          content={poolLength + "m"}
          left={() => setPoolLength(poolLength < 21 ? 20 : poolLength - 1)}
          right={() => setPoolLength(poolLength > 29 ? 30 : poolLength + 1)}
          disabledLeft={poolLength <= 20}
          disabledRight={poolLength >= 30}
        />
      </FloatingPanelCard>

      <FloatingPanelCard title="pool width">
        <HorizontalPicker
          content={poolWidth + "m"}
          left={() => setPoolWidth(poolWidth < 11 ? 10 : poolWidth - 1)}
          right={() => setPoolWidth(poolWidth > 19 ? 20 : poolWidth + 1)}
          disabledLeft={poolWidth <= 10}
          disabledRight={poolWidth >= 20}
        />
      </FloatingPanelCard>

      <FloatingPanelCard title="markers">
        <Switch checked={markers} onClick={() => setMarkers(!markers)} />
      </FloatingPanelCard>

      <FloatingPanelCard title="markers description">
        <Switch checked={markers && markersDesc} onClick={() => setMarkersDesc(!markersDesc)} disabled={!markers} />
      </FloatingPanelCard>

      <FloatingPanelCard title="center line">
        <Switch checked={centerLine} onClick={() => setCenterLine(!centerLine)} />
      </FloatingPanelCard>

      <FloatingPanelCard title="dimensions">
        <Switch checked={dimensions} onClick={() => setDimensions(!dimensions)} />
      </FloatingPanelCard>
    </FloatingPanel>
  );
};

export default PoolSettings;
