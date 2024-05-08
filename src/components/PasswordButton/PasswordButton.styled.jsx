import styled from "styled-components";

export const PasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 20px;
  height: 20px;
`;

export const PasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.black};
`;
