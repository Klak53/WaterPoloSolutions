import WaterWave from "react-water-wave";

import "./Ripples.scss";

import noise from "./noise.png";

import { usePool } from "../../shared/contexts/PoolContext";

const Ripples = ({ children }) => {
  const { ripples } = usePool();

  return (
    <WaterWave
      imageUrl={noise}
      interactive={ripples}
      dropRadius={10}
      perturbance={0.03}
      resolution={768}
      style={{ width: "100%", height: "100%" }}
    >
      {() => <>{children}</>}
    </WaterWave>
  );
};

export default Ripples;
