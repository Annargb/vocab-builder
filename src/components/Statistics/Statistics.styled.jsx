import styled from "styled-components";

export const TotalCount = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.linkColor};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Accent = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
`;
