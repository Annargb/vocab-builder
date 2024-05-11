import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 12px 0;

  @media screen and (min-width: 768px) {
    padding: 24px 0;
  }
`;

export const Logo = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

export const LogoIcon = styled.svg`
  width: 36px;
  height: 36px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
`;
