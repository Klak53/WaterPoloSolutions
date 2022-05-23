import { useNavigate } from "react-router-dom";
import { FaCamera, FaPowerOff } from "react-icons/fa";

import Menu, { MenuItem } from "../../shared/components/Menu/Menu";

import { useApp } from "../../shared/contexts/AppContext";

const LeftMenu = () => {
  const { screenshotSettings, setScreenshotSettings } = useApp();

  let navigate = useNavigate();
  const handleSignOut = () => navigate("/login");

  return (
    <Menu side="top">
      <MenuItem icon={<FaCamera />} description="take screenshot" active={screenshotSettings} onClick={() => setScreenshotSettings(!screenshotSettings)} />
      <MenuItem icon={<FaPowerOff />} description="sign out" onClick={() => handleSignOut()} />
    </Menu>
  );
};

export default LeftMenu;
