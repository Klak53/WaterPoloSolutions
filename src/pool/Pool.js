import styles from "./Pool.module.scss";

import Ripples from "./Ripples/Ripples";
import Water from "./Water/Water";
import Waves from "./Waves/Waves";
import Tiles from "./Tiles/Tiles";
import Logo from "./Logo/Logo";
import Lines from "./Lines/Lines";

import { usePool } from "../shared/contexts/PoolContext";

const Pool = () => {
  const { waves, shadows } = usePool();

  return (
    <div className={styles.pool} id="pool">
      <Ripples>
        <Water>
          {waves && <Waves />}
          <Tiles />
          <Logo />
          <div data-html2canvas-ignore>{shadows && <Lines shadows />}</div>
        </Water>
      </Ripples>
      <Lines />
    </div>
  );
};

export default Pool;
