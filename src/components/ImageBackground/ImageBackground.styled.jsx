import styled from "styled-components";
import mob_1x from "../../images/mobile/homebg-mobile-1x.png";
import mob_2x from "../../images/mobile/homebg-mobile-2x.png";
import desk_1x from "../../images/desktop/homebg-desktop-1x.png";
import desk_2x from "../../images/desktop/homebg-desktop-2x.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* margin-bottom: 8px; */

  @media screen and (max-width: 767px) {
    display: ${({ $register }) => {
      switch ($register) {
        case true:
          return "block";
        default:
          return "flex";
      }
    }};

    margin-bottom: ${({ $register }) => {
      switch ($register) {
        case true:
          return "8px";
        default:
          return "43px";
      }
    }};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ImgContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  background-repeat: no-repeat;
  background-image: image-set(url(${mob_1x}) 1x, url(${mob_2x}) 2x);

  @media screen and (max-width: 767px) {
    max-width: 247px;
    min-height: 191px;
  }

  @media screen and (min-width: 768px) {
    background-image: none;
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
    height: 435px;
    background-image: image-set(url(${desk_1x}) 1x, url(${desk_2x}) 2x);
  }
`;

export const SubText = styled.p`
  /* margin-bottom: 35px; */
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.colors.textColor};

  @media screen and (max-width: 767px) {
    display: ${({ $register }) => {
      switch ($register) {
        case true:
          return "none";
        default:
          return "block";
      }
    }};
  }

  @media screen and (min-width: 768px) {
    /* margin-bottom: 0; */
    font-size: 16px;
    line-height: 1.5;
  }
`;
