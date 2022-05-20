import { FaWater, FaCog } from "react-icons/fa";

import Menu, { MenuItem } from "../../shared/components/Menu/Menu";

import { useApp } from "../../shared/contexts/AppContext";

const LeftMenu = () => {
  const { poolSettings, setPoolSettings, graphicSettings, setGraphicSettings } =
    useApp();

  return (
    <Menu side="left">
      <MenuItem
        icon={<FaWater />}
        description="pool settings"
        active={poolSettings}
        onClick={() => setPoolSettings(!poolSettings)}
      />
      <MenuItem
        icon={<FaCog />}
        description="graphic settings"
        active={graphicSettings}
        onClick={() => setGraphicSettings(!graphicSettings)}
      />
    </Menu>
  );
};

export default LeftMenu;
