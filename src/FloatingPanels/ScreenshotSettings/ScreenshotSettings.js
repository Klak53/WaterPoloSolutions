import html2canvas from "html2canvas";
import { useState } from "react";
import { FaCamera, FaDownload } from "react-icons/fa";

import FloatingPanel, { FloatingPanelCard, FloatingPanelFooter } from "../../shared/components/FloatingPanel/FloatingPanel";
import HorizontalPicker from "../../shared/components/HorizontalPicker/HorizontalPicker";
import Button from "../../shared/components/Button/Button";

import { useApp } from "../../shared/contexts/AppContext";

const ScreenshotSettings = ({ forwarderRef }) => {
  const { screenshotSettings, setScreenshotSettings } = useApp();

  const [quality, setQuality] = useState(4);
  const [format, setFormat] = useState(1);

  const resolutions = [
    [1024, 576, "SD"],
    [1280, 720, "HD"],
    [1920, 1080, "FHD"],
    [2560, 1440, "QHD"],
    [3840, 2160, "4K UHD"],
    [7680, 4320, "8K UHD"],
  ];

  const formats = [
    ["PNG", "png", 32],
    ["JPG", "jpeg", 24],
    ["WEBP", "webp", 32],
  ];

  const saveAs = (uri, filename) => {
    let link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  };

  const handleCapture = () => {
    const pool = document.querySelector("#pool");
    const resolution = resolutions[quality][0] / pool.clientWidth;

    console.log("click");

    html2canvas(pool, {
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
      scale: resolution,
    }).then((canvas) => {
      saveAs(canvas.toDataURL(`image/${formats[format][1]}`), `water_polo_${new Date().getTime()}.${formats[format][0].toLowerCase()}`);
    });
  };

  return (
    <FloatingPanel id="screenshotSettings" icon={<FaCamera />} title="screenshot" forwarderRef={forwarderRef} visible={screenshotSettings} close={() => setScreenshotSettings(false)}>
      <FloatingPanelCard title="quality">
        <HorizontalPicker
          content={resolutions[quality][2]}
          left={() => setQuality(quality < 0 ? 0 : quality - 1)}
          right={() => setQuality(quality > resolutions.length - 1 ? resolutions.length - 1 : quality + 1)}
          disabledLeft={quality <= 0}
          disabledRight={quality >= resolutions.length - 1}
        />
      </FloatingPanelCard>
      <FloatingPanelCard title="format">
        <HorizontalPicker
          content={formats[format][0]}
          left={() => setFormat(format < 0 ? 0 : format - 1)}
          right={() => setFormat(format > formats.length - 1 ? formats.length - 1 : format + 1)}
          disabledLeft={format <= 0}
          disabledRight={format >= formats.length - 1}
        />
      </FloatingPanelCard>
      <FloatingPanelFooter>
        <ul>
          <li>
            <span>Resolution:</span> {resolutions[quality][0]} x {resolutions[quality][1]}px
          </li>
          <li>
            <span>Bit Depth:</span> {formats[format][2]}bit
          </li>
        </ul>
      </FloatingPanelFooter>
      <Button wide icon={<FaDownload />} title="download" onClick={handleCapture} />
    </FloatingPanel>
  );
};

export default ScreenshotSettings;
