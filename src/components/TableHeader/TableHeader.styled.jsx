import styled from "styled-components";

export const HeadContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CountryIcon = styled.svg`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;

export const HeadText = styled.span`
  font-weight: 500;
  font-size: 16px;
  text-transform: capitalize;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;
