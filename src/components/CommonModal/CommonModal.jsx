import Modal from "react-modal";
import icons from "../../images/icons.svg";
import * as v from "./CommonModal.styled";
import { modalStyles } from "../../styles/modalStyles";

Modal.setAppElement("#root");

export const CommonModal = ({
  children,
  isModalOpen,
  closeModal,
  className,
}) => {
  return (
    <v.CustomModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      className={className}
      contentLabel="Custom Modal"
    >
      <v.CloseButton type="button" onClick={closeModal} className={className}>
        <v.CloseIcon className={className}>
          <use href={`${icons}#close`} />
        </v.CloseIcon>
      </v.CloseButton>
      {children}
    </v.CustomModal>
  );
};
