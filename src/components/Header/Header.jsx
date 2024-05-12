import * as v from "./Header.styled";
import icons from "../../images/icons.svg";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { UserBar } from "../UserBar/UserBar";
import { LogOutButton } from "../LogOutButton/LogOutButton";
import { UserNav } from "../UserNav/UserNav";
// import { useState } from "react";
import { CommonModal } from "../CommonModal/CommonModal";
import { useModalState } from "../../hooks/useModalState";

export const Header = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isModalOpen, openModal, closeModal } = useModalState();

  // const openModal = () => {
  //   setIsModalOpen(true);
  //   document.body.style.overflow = "hidden";
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   document.body.style.overflow = "";
  // };

  return (
    <v.Header>
      <v.Logo>
        <v.LogoIcon>
          <use href={`${icons}#logo`} />
        </v.LogoIcon>
        <v.LogoText>VocabBuilder</v.LogoText>
      </v.Logo>
      {isLoggedIn && (
        <>
          <UserNav className="header" />

          <v.UserMenuWrapper>
            <UserBar />
            <BurgerMenu openModal={openModal} />
            <LogOutButton className="header" />
          </v.UserMenuWrapper>
        </>
      )}
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        className="mobileMenu"
      >
        <UserBar className="mobileMenu" />
        <UserNav className="mobileMenu" />
        <LogOutButton className="mobileMenu" closeModal={closeModal} />
      </CommonModal>
    </v.Header>
  );
};
