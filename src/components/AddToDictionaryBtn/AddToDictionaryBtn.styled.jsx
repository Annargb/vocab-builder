import styled from "styled-components";

export const TextBtn = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-weight: 500;
    font-size: 14px;
    color: ${(p) => p.theme.colors.black};
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.mainGreen};
  transition: fill 250ms ${(p) => p.theme.transition};
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  &:hover ${ArrowIcon}, &:focus ${ArrowIcon} {
    fill: ${(p) => p.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    width: 120px;
    height: 41px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 165px;
    height: 22px;
  }
`;
