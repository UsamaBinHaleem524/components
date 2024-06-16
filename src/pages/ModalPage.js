import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";
function ModalPage() {
  const handleClose = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const actionBar = (
    <Button primary onClick={handleClose}>
      I accept
    </Button>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
export default ModalPage;
