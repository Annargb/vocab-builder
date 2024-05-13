import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const CommonIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.mainGreen};
  transition: fill 250ms ${(p) => p.theme.transition};
`;

export const AddWordBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover ${CommonIcon}, &:focus ${CommonIcon} {
    fill: ${(p) => p.theme.colors.black};
  }
`;

export const TrainLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover ${CommonIcon}, &:focus ${CommonIcon} {
    fill: ${(p) => p.theme.colors.black};
  }
`;
