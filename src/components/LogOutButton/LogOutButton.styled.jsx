import styled from "styled-components";

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${(p) => p.theme.colors.black};
  transition: fill 250ms ${(p) => p.theme.transition};
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 81px;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};

  &.header {
    display: none;

    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }

  &:hover ${ArrowIcon}, &:focus ${ArrowIcon} {
    fill: ${(p) => p.theme.colors.mainGreen};
  }
`;
