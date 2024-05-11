import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 10px;
  }
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.mainGreen};

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const UserIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.userIconColor};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
