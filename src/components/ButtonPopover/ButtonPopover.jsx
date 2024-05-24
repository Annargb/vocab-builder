import { useCallback, useEffect, useState } from "react";
import { usePopper } from "react-popper";
import * as v from "./ButtonPopover.styled";
import { useDispatch } from "react-redux";
import { deleteWord } from "../../redux/dictionary/dictionaryOperations";
import { EditWordForm } from "../EditWordForm/EditWordForm";
import { useModalState } from "../../hooks/useModalState";
import { CommonModal } from "../CommonModal/CommonModal";
// import icons from "../../images/icons.svg";

export const ButtonPopover = ({ id, word }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    // placement: "bottom",
    placement: "bottom",
  });

  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModalState();

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        popperElement &&
        !popperElement.contains(event.target) &&
        referenceElement &&
        !referenceElement.contains(event.target)
      ) {
        setShowPopover(false);
      }
    },
    [popperElement, referenceElement]
  );

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setShowPopover(false);
    }
  }, []);

  useEffect(() => {
    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopover, handleClickOutside, handleKeyDown]);

  const handleOpenModal = () => {
    setShowPopover(false);
    openModal();
  };

  return (
    <>
      <v.PopoverBtn
        type="button"
        ref={setReferenceElement}
        onClick={togglePopover}
      >
        ...
      </v.PopoverBtn>
      {showPopover && (
        <v.Popover
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <v.BtnContainer>
            <li>
              <v.ActionsBtn type="button" onClick={handleOpenModal}>
                <v.EditIcon />
                {/* <v.PopoverIcon>
                  <use href={`${icons}#icon-edit-2`} />
                </v.PopoverIcon> */}
                <v.TextBtn>Edit</v.TextBtn>
              </v.ActionsBtn>
            </li>
            <li>
              <v.ActionsBtn
                type="button"
                onClick={() => dispatch(deleteWord(id))}
              >
                <v.TrashIcon />
                {/* <v.PopoverIcon>
                  <use href={`${icons}#trash`} />
                </v.PopoverIcon> */}
                <v.TextBtn>Delete</v.TextBtn>
              </v.ActionsBtn>
            </li>
          </v.BtnContainer>
        </v.Popover>
      )}
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        className="edit"
      >
        <EditWordForm closeModal={closeModal} word={word} />
      </CommonModal>
    </>
  );
};
