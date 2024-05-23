import styled from "styled-components";
import { LuPen, LuTrash2 } from "react-icons/lu";

export const PopoverBtn = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: ${(p) => p.theme.colors.linkColor};
  transition: color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.black};
  }
`;

export const Popover = styled.div`
  z-index: 100;
  width: 117px;
  height: 70px;
  padding: 12px 24px;
  border-radius: 15px;
  box-shadow: 0 4px 47px 0 ${(p) => p.theme.colors.shadow};
  background: ${(p) => p.theme.colors.snowWhite};

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 80px;
  }
`;

export const BtnContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EditIcon = styled(LuPen)`
  width: 16px;
  height: 16px;
  stroke: ${(p) => p.theme.colors.linkColor};
  transition: stroke 250ms ${(p) => p.theme.transition};
`;

export const TrashIcon = styled(LuTrash2)`
  width: 16px;
  height: 16px;
  stroke: ${(p) => p.theme.colors.linkColor};
  transition: stroke 250ms ${(p) => p.theme.transition};
`;

// export const PopoverIcon = styled.svg`
//   width: 16px;
//   height: 16px;
//   fill: ${(p) => p.theme.colors.mainGreen};
//   transition: fill 250ms ${(p) => p.theme.transition};
// `;

export const ActionsBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover
    ${TrashIcon},
    &:focus
    ${TrashIcon},
    &:hover
    ${EditIcon},
    &:focus
    ${EditIcon} {
    stroke: ${(p) => p.theme.colors.mainGreen};
  }
`;

export const TextBtn = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
