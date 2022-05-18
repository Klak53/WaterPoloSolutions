import styles from "./Tiles.module.scss";

import { usePool } from "../../shared/contexts/PoolContext";

const Tiles = () => {
  const { poolLength, poolWidth } = usePool();

  const length =
    poolLength +
    (poolLength - poolWidth > 15 ? 25 : 20) -
    (poolLength - poolWidth);
  const width = length * 0.5625;
  const tileSize = 1;

  const drawTiles = () => {
    let verticalLines = tileSize;
    let horizontalLines = tileSize;
    let verticalGridLines = [];
    let horizontalGridLines = [];

    while (verticalLines < length) {
      verticalGridLines.push(verticalLines);
      verticalLines += tileSize;
    }

    while (horizontalLines < width) {
      horizontalGridLines.push(horizontalLines);
      horizontalLines += tileSize;
    }

    return (
      <>
        {verticalGridLines.map((line, index) => (
          <line key={index} x1={line} y1={0} x2={line} y2={width} />
        ))}

        {horizontalGridLines.map((line, index) => (
          <line key={index} x1={0} y1={line} x2={length} y2={line} />
        ))}
      </>
    );
  };

  return (
    <svg className={styles.tiles} viewBox={`0 0 ${length} ${width}`}>
      <g className={styles.tiles__grid} strokeWidth={length * 0.000075}>
        {drawTiles()}
      </g>
    </svg>
  );
};

export default Tiles;
