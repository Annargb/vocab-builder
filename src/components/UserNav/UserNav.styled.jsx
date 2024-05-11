import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: none;
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px; */

  &.header {
    @media screen and (min-width: 1440px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;
    }
  }
`;

export const NavItem = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};
  transition:
    color 250ms ${(p) => p.theme.transition},
    background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.mainGreen};
  }

  &.active {
    padding: 12px 20px;
    border-radius: 15px;
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.mainGreen};
  }
`;
