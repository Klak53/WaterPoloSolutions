const Waves = () => {
  return (
    <svg viewBox="0 0 1920 1080">
      <defs>
        <filter id="waves" x="0" y="0" width="500%" height="500%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0075"
            numOctaves="5"
            seed="3"
          />
          <feOffset>
            <animate
              attributeName="dx"
              values="0; -2000; 0"
              dur="45s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="dy"
              values="0; -2000; 0"
              dur="60s"
              begin="0s"
              repeatCount="indefinite"
            />
          </feOffset>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Waves;
