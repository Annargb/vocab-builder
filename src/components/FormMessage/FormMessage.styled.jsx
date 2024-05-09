import styled from "styled-components";

export const MessageContainer = styled.span`
  position: absolute;
  left: 0;
  bottom: -22px;
  /* display: inline-flex;
  align-items: center;
  justify-content: center; */
  gap: 4px;
`;

export const MessageIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const MessageText = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.01em;
`;
