import { MdSpeed } from "react-icons/md";

import Modal from "../shared/components/Modal/Modal";
import Button from "../shared/components/Button/Button";

const DeviceOptimization = () => {
  return (
    <Modal icon={<MdSpeed />} title="device optimization" close={false}>
      <Button wide btnStyle="success" title="start" />
    </Modal>
  );
};

export default DeviceOptimization;
