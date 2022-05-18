import styles from "./Lines.module.scss";

import { usePool } from "../../shared/contexts/PoolContext";

const Lines = ({ shadows }) => {
  const { poolLength, poolWidth, markers, markersDesc, centerLine, dimensions } = usePool();

  const length = poolLength + (poolLength - poolWidth > 15 ? 25 : 20) - (poolLength - poolWidth);
  const width = length * 0.5625;
  const markerThickness = length * 0.00075;
  const dimensionThincknes = length * 0.0015;
  const lineThickness = length * 0.00625;
  const goalDepth = 1.5;
  const goalWidth = 3;
  const goalNetThickness = width * 0.001;
  const goalNetDensity = 0.25;

  const drawMarker = (x1, y1, x2, y2) => <line x1={x1} y1={y1} x2={x2} y2={y2} />;

  const drawMarkerDesc = (x, y, text) => {
    return (
      <text textAnchor="middle" dominantBaseline="middle" transform={`rotate(-90, ${x} ${y})`} x={x} y={y}>
        {text}
      </text>
    );
  };

  const drawHorizontalLine = (x1, x2, y) => {
    if (y > 0 && y < width / 2) {
      y = y - lineThickness;
    } else if (y === width / 2) {
      y = y - lineThickness / 2;
    } else if (y === width) {
      y = y - lineThickness;
    }

    return <rect x={x1} y={y} width={x2} height={lineThickness} />;
  };

  const drawVerticalLine = (y1, y2, x) => {
    if (x > 0 && x < length / 2) {
      x = x - lineThickness;
    } else if (x === length / 2) {
      x = x - lineThickness / 2;
    } else if (x === length) {
      x = x - lineThickness;
    }

    return <rect x={x} y={y1} width={lineThickness} height={y2} />;
  };

  const drawGoalNet = (side) => {
    let verticalLines = 0;
    let horizontalLines = 0;
    let verticalGoalLines = [];
    let horizontalGoalLines = [];

    while (verticalLines < goalDepth) {
      verticalGoalLines.push(verticalLines);
      verticalLines += goalNetDensity;
    }

    while (horizontalLines < goalWidth) {
      horizontalLines += goalNetDensity;
      horizontalGoalLines.push(horizontalLines);
    }

    return (
      <g>
        {verticalGoalLines.map((line, index) => (
          <line
            key={index}
            x1={side === "home" ? length / 2 - poolLength / 2 - line - goalNetThickness : length / 2 + poolLength / 2 + line + goalNetThickness}
            y1={width / 2 - goalWidth / 2}
            x2={side === "home" ? length / 2 - poolLength / 2 - line - goalNetThickness : length / 2 + poolLength / 2 + line + goalNetThickness}
            y2={width / 2 + goalWidth / 2}
          />
        ))}
        {horizontalGoalLines.map((line, index) => (
          <line
            key={index}
            x1={side === "home" ? length / 2 - poolLength / 2 - goalDepth : length / 2 + poolLength / 2}
            y1={width / 2 - goalWidth / 2 + line}
            x2={side === "home" ? length / 2 - poolLength / 2 : length / 2 + poolLength / 2 + goalDepth}
            y2={width / 2 - goalWidth / 2 + line}
          />
        ))}
      </g>
    );
  };

  return (
    <svg className={`${styles.lines} ${shadows ? styles.lines__shadows : undefined}`} viewBox={`0 0 ${length} ${width}`}>
      {/* MARKERS */}
      {markers && !shadows && (
        <g className={styles.lines__marker} strokeWidth={markerThickness} strokeDasharray="0.25, 0.25">
          {drawMarker(length / 2 - poolLength / 2 + 2, 0, length / 2 - poolLength / 2 + 2, width)}
          {drawMarker(length / 2 - poolLength / 2 + 5, 0, length / 2 - poolLength / 2 + 5, width)}
          {drawMarker(length / 2 - poolLength / 2 + 6, 0, length / 2 - poolLength / 2 + 6, width)}
          {drawMarker(length / 2 + poolLength / 2 - 2, 0, length / 2 + poolLength / 2 - 2, width)}
          {drawMarker(length / 2 + poolLength / 2 - 5, 0, length / 2 + poolLength / 2 - 5, width)}
          {drawMarker(length / 2 + poolLength / 2 - 6, 0, length / 2 + poolLength / 2 - 6, width)}
        </g>
      )}

      {/* CENTER LINE */}
      {centerLine && !shadows && (
        <g className={styles.lines__marker} strokeWidth={markerThickness} strokeDasharray="0.25, 0.25">
          {drawMarker(length / 2, 0, length / 2, width)}
        </g>
      )}

      {/* MARKER DESCRIPTIONS */}
      {markers && markersDesc && !shadows && (
        <g className={styles.lines__marker_desc}>
          {/* HOME */}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 2 - 0.3, width / 2 - poolWidth / 2 + 1.75, "2 meter line")}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 2 - 0.3, width / 2 + poolWidth / 2 - 1.75, "2 meter line")}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 5 - 0.3, width / 2 - poolWidth / 2 + 1.75, "5 meter line")}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 5 - 0.3, width / 2 + poolWidth / 2 - 1.75, "5 meter line")}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 6 - 0.3, width / 2 - poolWidth / 2 + 1.75, "6 meter line")}
          {drawMarkerDesc(length / 2 - poolLength / 2 + 6 - 0.3, width / 2 + poolWidth / 2 - 1.75, "6 meter line")}
          {/* AWAY */}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 2 - 0.3, width / 2 - poolWidth / 2 + 1.75, "2 meter line")}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 2 - 0.3, width / 2 + poolWidth / 2 - 1.75, "2 meter line")}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 5 - 0.3, width / 2 - poolWidth / 2 + 1.75, "5 meter line")}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 5 - 0.3, width / 2 + poolWidth / 2 - 1.75, "5 meter line")}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 6 - 0.3, width / 2 - poolWidth / 2 + 1.75, "6 meter line")}
          {drawMarkerDesc(length / 2 + poolLength / 2 - 6 - 0.3, width / 2 + poolWidth / 2 - 1.75, "6 meter line")}
        </g>
      )}

      {/* DIMENSIONS */}
      {dimensions && !shadows && (
        <g className={styles.lines__dimensions} strokeWidth={dimensionThincknes}>
          <marker id="rightArrow" markerWidth={6} markerHeight={4} refX={0} refY={2} orient="auto">
            <polygon points="0 0, 6 2, 0 4" />
          </marker>

          <marker id="leftArrow" markerWidth={6} markerHeight={4} refX={6} refY={2} orient="auto">
            <polygon points="6 0, 6 4, 0 2" />
          </marker>

          <text textAnchor="middle" x={length / 2} y={width / 2 + poolWidth / 2 - 1.6}>
            {poolLength}m
          </text>
          <line
            x1={length / 2 - poolLength / 2 + 0.3}
            y1={width / 2 + poolWidth / 2 - 1.3}
            x2={length / 2 + poolLength / 2 - 0.3}
            y2={width / 2 + poolWidth / 2 - 1.3}
            markerStart="url(#leftArrow)"
            markerEnd="url(#rightArrow)"
          />

          <text textAnchor="middle" transform={`rotate(-90, ${length / 2 + poolLength / 2 - 1.3}, ${width / 2})`} x={length / 2 + poolLength / 2 - 1.3} y={width / 2}>
            {poolWidth}m
          </text>
          <line
            x1={length / 2 + poolLength / 2 - 1}
            y1={width / 2 - poolWidth / 2 + 0.6}
            x2={length / 2 + poolLength / 2 - 1}
            y2={width / 2 + poolWidth / 2 - 0.6}
            markerStart="url(#leftArrow)"
            markerEnd="url(#rightArrow)"
          />
        </g>
      )}

      {/* LINES */}
      {poolLength && poolWidth && (
        <>
          {/* WHITE LINES */}
          <g className={styles.lines__white}>
            {/* HORIZONTAL LINES*/}
            {drawHorizontalLine(0, length, 0)}
            {drawHorizontalLine(0, length, width / 2 - poolWidth / 2)}
            {drawHorizontalLine(0, length, width / 2 + poolWidth / 2)}
            {drawHorizontalLine(0, length, width)}
            {/* VERTICAL LINES LEFT */}
            {drawVerticalLine(0, width, 0)}
            {drawVerticalLine(0, width, length / 2 - poolLength / 2 - goalDepth)}
            {drawVerticalLine(0, width / 2 - goalWidth / 2, length / 2 - poolLength / 2 - 0.3)}
            {drawVerticalLine(width / 2 + goalWidth / 2, width, length / 2 - poolLength / 2 - 0.3)}
            {/* VERTICAL LINES RIGHT */}
            {drawVerticalLine(0, width, length)}
            {drawVerticalLine(0, width, length / 2 + poolLength / 2 + goalDepth)}
            {drawVerticalLine(0, width / 2 - goalWidth / 2, length / 2 + poolLength / 2 + 0.3)}
            {drawVerticalLine(width / 2 + goalWidth / 2, width, length / 2 + poolLength / 2 + 0.3)}
            {/* HOME GOAL */}
            {drawHorizontalLine(length / 2 - poolLength / 2 - goalDepth - lineThickness / 2, goalDepth + lineThickness / 2, width / 2 - goalWidth / 2)}
            {drawHorizontalLine(length / 2 - poolLength / 2 - goalDepth - lineThickness / 2, goalDepth + lineThickness / 2, width / 2 + goalWidth / 2)}
            {/* AWAY GOAL */}
            {drawHorizontalLine(length / 2 + poolLength / 2, goalDepth + lineThickness / 2, width / 2 - goalWidth / 2)}
            {drawHorizontalLine(length / 2 + poolLength / 2, goalDepth + lineThickness / 2, width / 2 + goalWidth / 2)}
          </g>
          {!shadows && (
            <>
              {/* RED LINES */}
              <g className={styles.lines__red}>
                {drawHorizontalLine(length / 2 - poolLength / 2, poolLength, width / 2 - poolWidth / 2)}
                {drawHorizontalLine(length / 2 - poolLength / 2, poolLength, width / 2 + poolWidth / 2)}
              </g>
              {/* YELLOW LINES */}
              <g className={styles.lines__yellow}>
                {drawHorizontalLine(length / 2 - poolLength / 2 + 2, 2.85, width / 2 - poolWidth / 2)}
                {drawHorizontalLine(length / 2 - poolLength / 2 + 5.15, poolLength - 10.3, width / 2 - poolWidth / 2)}
                {drawHorizontalLine(length / 2 + poolLength / 2 - 4.85, 2.85, width / 2 - poolWidth / 2)}
                {drawHorizontalLine(length / 2 - poolLength / 2 + 2, 2.85, width / 2 + poolWidth / 2)}
                {drawHorizontalLine(length / 2 - poolLength / 2 + 5.15, poolLength - 10.3, width / 2 + poolWidth / 2)}
                {drawHorizontalLine(length / 2 + poolLength / 2 - 4.85, 2.85, width / 2 + poolWidth / 2)}
              </g>
              {/* GREEN LINES */}
              <g className={styles.lines__green}>
                {drawHorizontalLine(length / 2 - poolLength / 2 + 6, poolLength - 12, width / 2 - poolWidth / 2)}
                {drawHorizontalLine(length / 2 - poolLength / 2 + 6, poolLength - 12, width / 2 + poolWidth / 2)}
              </g>
            </>
          )}
        </>
      )}

      {/* GOAL NETS */}
      {poolLength && poolWidth && (
        <g className={styles.lines__goal_net} strokeWidth={goalNetThickness}>
          {drawGoalNet("home")}
          {drawGoalNet("away")}
        </g>
      )}
    </svg>
  );
};

export default Lines;
