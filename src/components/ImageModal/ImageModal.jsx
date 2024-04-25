import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, closeModal, image }) {
  return (
    <div>
      <Modal
        className={css.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <img src={image} alt="Large photo" />
      </Modal>
    </div>
  );
}
