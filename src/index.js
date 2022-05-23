import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./shared/scss/index.scss";
import styles from "./index.module.scss";

import PoolContext from "./shared/contexts/PoolContext";
import AppContext from "./shared/contexts/AppContext";

import DeviceOptimization from "./DeviceOptimization/DeviceOptimization";
import Pool from "./Pool/Pool";
import Auth from "./Auth/Auth";
import Menus from "./Menus/Menus";
import FloatingPanels from "./FloatingPanels/FloatingPanels";

const App = () => {
  const location = useLocation();

  return (
    <div className={styles.water_polo_solutions}>
      <DeviceOptimization />
      <Pool />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              <>
                <Menus />
                <FloatingPanels />
              </>
            }
          />

          <Route exact path="/login" element={<Auth login />} />
          <Route exact path="/signup" element={<Auth signup />} />
          <Route
            exact
            path="/password-reset"
            element={<Auth passwordReset />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PoolContext>
        <AppContext>
          <App />
        </AppContext>
      </PoolContext>
    </BrowserRouter>
  </React.StrictMode>
);
