import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/index.scss";
import styles from "./index.module.scss";

import PoolContext from "./shared/contexts/PoolContext";

import Pool from "./pool/Pool";

const App = () => {
  return (
    <div className={styles.water_polo_solutions}>
      <Pool />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PoolContext>
      <App />
    </PoolContext>
  </React.StrictMode>
);
