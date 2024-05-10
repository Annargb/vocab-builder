import styled from "styled-components";

// export const MessageContainer = styled.span`
//   position: absolute;
//   left: 0;
//   top: 55px;

//   @media screen and (min-width: 768px) {
//     top: 58px;
//   }
// `;

export const MessageIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
    top: -1px;
  }
`;

export const MessageText = styled.span`
  position: absolute;
  left: 0;
  top: 56px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: color 250ms ${(p) => p.theme.transition};
  color: ${({ $error }) => {
    switch ($error) {
      case true:
        return (p) => p.theme.colors.errorColor;
      default:
        return (p) => p.theme.colors.successColor;
    }
  }};

  @media screen and (min-width: 768px) {
    top: 58px;
  }
`;
