import styled from "styled-components";

export const BurgerButton = styled.button`
  width: 32px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 28px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerIcon = styled.svg`
  width: 32px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 28px;
  }
`;
