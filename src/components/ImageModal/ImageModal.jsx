import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
    </ReactModal>
  );
};

export default ImageModal;
