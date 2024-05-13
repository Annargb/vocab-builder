import styled from "styled-components";

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${(p) => p.theme.colors.black};
  transition: fill 250ms ${(p) => p.theme.transition};

  &.mobileMenu {
    fill: ${(p) => p.theme.colors.white};
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 81px;
  height: 24px;

  &.header {
    display: none;

    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }

  &:hover ${ArrowIcon}, &:focus ${ArrowIcon} {
    fill: ${(p) => p.theme.colors.mainGreen};
  }

  &.mobileMenu {
    &:hover ${ArrowIcon}, &:focus ${ArrowIcon} {
      fill: ${(p) => p.theme.colors.black};
    }
  }
`;

export const BtnText = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};

  &.mobileMenu {
    color: ${(p) => p.theme.colors.white};
  }
`;
