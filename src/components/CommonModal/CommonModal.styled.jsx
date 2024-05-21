import styled from "styled-components";

import mob_1x from "../../images/mobile/mobile-menu-1x.png";
import mob_2x from "../../images/mobile/mobile-menu-2x.png";
import tab_1x from "../../images/tablet/homebg-tablet-1x.png";
import tab_2x from "../../images/desktop/homebg-desktop-2x.png";

import Modal from "react-modal";

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  &.mobileMenu {
    /* top: 16px;
    right: 16px; */
    width: 32px;
    height: 32px;

    @media screen and (min-width: 768px) {
      top: 20px;
      right: 32px;
      width: 40px;
      height: 40px;
    }
  }

  &.addWord {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      top: 20px;
      right: 20px;
      width: 32px;
      height: 32px;
    }
  }
`;

export const CloseIcon = styled.svg`
  fill: ${(p) => p.theme.colors.white};

  &.mobileMenu {
    width: 32px;
    height: 32px;

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  &.addWord {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;

export const CustomModal = styled(Modal)`
  position: absolute;
  background-color: ${(p) => p.theme.colors.mainGreen};
  overflow-y: auto;

  &.mobileMenu {
    top: 0;
    bottom: auto;
    right: 0;
    width: 185px;
    height: 100%;
    min-height: 100vh;
    /* height: 812px; */
    max-height: 812px;
    padding: 16px;
    background-repeat: no-repeat;
    background-image: image-set(url(${mob_1x}) 1x, url(${mob_2x}) 2x);
    background-position: bottom center;

    @media screen and (min-width: 768px) {
      width: 300px;
      height: 1024px;
      padding: 20px 32px;
      background-image: image-set(url(${tab_1x}) 1x, url(${tab_2x}) 2x);
    }
  }

  &.addWord {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    width: 85%;
    max-width: 343px;
    height: 622px;
    padding: 48px 16px;
    border-radius: 15px;

    @media screen and (min-width: 375px) {
      min-width: 343px;
    }

    @media screen and (min-width: 768px) {
      min-width: 628px;
      padding: 48px 64px;
    }
  }
`;
