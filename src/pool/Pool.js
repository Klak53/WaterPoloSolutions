import styles from "./Pool.module.scss";

import Water from "./Water/Water";
import Waves from "./Waves/Waves";
import Tiles from "./Tiles/Tiles";
import Logo from "./Logo/Logo";
import Lines from "./Lines/Lines";

import { usePool } from "../shared/contexts/PoolContext";

const Pool = () => {
  const { waves, shadows } = usePool();

  return (
    <div className={styles.pool}>
      <Water>
        {waves && <Waves />}
        <Tiles />
        <Logo />
        {shadows && <Lines shadows />}
      </Water>
      <Lines />
    </div>
  );
};

export default Pool;
