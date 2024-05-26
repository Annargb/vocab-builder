import styled from "styled-components";
import list_mob_1x from "../../images/mobile/list-mobile-1x.png";
import list_mob_2x from "../../images/mobile/list-mobile-2x.png";
import list_tab_1x from "../../images/tablet/list-tablet-1x.png";
import list_tab_2x from "../../images/tablet/list-tablet-2x.png";
import list_desk_1x from "../../images/desktop/list-desktop-1x.png";
import list_desk_2x from "../../images/desktop/list-desktop-2x.png";
import { Link } from "react-router-dom";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 75px 0;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    width: 902px;
    margin: 0 auto;
  }

  &.training {
    padding: 75px 0;

    @media screen and (min-width: 768px) {
      padding: 140px 0 227px 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 193px 0 230px 0;
    }
  }
`;

export const TextBtnContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 581px;
  }
`;

export const ImgContainer = styled.div`
  flex-shrink: 0;
  width: 144px;
  height: 174px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-image: image-set(url(${list_mob_1x}) 1x, url(${list_mob_2x}) 2x);

  @media screen and (min-width: 768px) {
    width: 205px;
    height: 240px;
    background-image: image-set(url(${list_tab_1x}) 1x, url(${list_tab_2x}) 2x);
  }

  @media screen and (min-width: 1440px) {
    width: 203px;
    height: 240px;
    background-image: image-set(
      url(${list_desk_1x}) 1x,
      url(${list_desk_2x}) 2x
    );
  }
`;

export const NotFoundTitle = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`;

export const NotFoundText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  &.training {
    margin-bottom: 132px;

    @media screen and (min-width: 768px) {
      margin-bottom: 64px;
    }
  }
`;

export const AddWordLink = styled(Link)`
  display: none;

  &.training {
    display: inline-block;
    width: 100%;
    max-width: 343px;
    height: 56px;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: ${(p) => p.theme.colors.white};
    border-radius: 30px;
    background-color: ${(p) => p.theme.colors.mainGreen};
    transition: background-color 250ms ${(p) => p.theme.transition};

    &:hover,
    &:focus {
      background-color: ${(p) => p.theme.colors.mainGreenHover};
    }

    @media screen and (min-width: 768px) {
      width: 215px;
      padding: 14px;
      font-size: 18px;
      line-height: 1.56;
    }
  }
`;
