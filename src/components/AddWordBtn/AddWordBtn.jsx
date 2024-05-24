import icons from "../../images/icons.svg";
import { AddWordForm } from "../AddWordForm/AddWordForm";
import { CommonModal } from "../CommonModal/CommonModal";
import { useModalState } from "../../hooks/useModalState";
import * as v from "./AddWordBtn.styled";

export const AddWordBtn = ({ className }) => {
  const { isModalOpen, openModal, closeModal } = useModalState();
  return (
    <>
      <v.BtnLinkContainer>
        <v.AddWordBtn
          type="button"
          className={className}
          onClick={() => openModal()}
        >
          <v.Text>Add word</v.Text>
          <v.CommonIcon>
            <use href={`${icons}#plus`} />
          </v.CommonIcon>
        </v.AddWordBtn>

        <v.TrainLink to="/training">
          <v.Text>Train oneself</v.Text>
          <v.CommonIcon>
            <use href={`${icons}#link-arrow`} />
          </v.CommonIcon>
        </v.TrainLink>
      </v.BtnLinkContainer>
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        className="addWord"
      >
        <AddWordForm closeModal={closeModal} />
      </CommonModal>
    </>
  );
};
