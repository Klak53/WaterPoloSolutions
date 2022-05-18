import { createContext, useContext, useState } from "react";

const PoolContext = createContext();

export const usePool = () => useContext(PoolContext);

const PoolContextProvider = ({ children }) => {
  const [poolLength, setPoolLength] = useState(25);
  const [poolWidth, setPoolWidth] = useState(15);

  const [waves, setWaves] = useState(true);
  const [shadows, setShadows] = useState(true);

  const [markers, setMarkers] = useState(true);
  const [markersDesc, setMarkersDesc] = useState(true);
  const [centerLine, setCenterLine] = useState(true);
  const [dimensions, setDimensions] = useState(true);

  const value = {
    poolLength,
    setPoolLength,
    poolWidth,
    setPoolWidth,
    waves,
    setWaves,
    shadows,
    setShadows,
    markers,
    setMarkers,
    markersDesc,
    setMarkersDesc,
    centerLine,
    setCenterLine,
    dimensions,
    setDimensions,
  };

  return <PoolContext.Provider value={value}>{children}</PoolContext.Provider>;
};

export default PoolContextProvider;
