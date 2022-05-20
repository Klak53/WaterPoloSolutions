import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [poolSettings, setPoolSettings] = useState(false);
  const [graphicSettings, setGraphicSettings] = useState(false);

  const value = {
    poolSettings,
    setPoolSettings,
    graphicSettings,
    setGraphicSettings,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
