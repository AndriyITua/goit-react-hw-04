import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({
  modalIsOpen,
  closeModal,
  afterOpenModal,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <img className={css.image} src="???" alt="" />
      </Modal>
    </div>
  );
}
