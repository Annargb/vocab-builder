import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled.svg`
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
`;

export const LoaderContainer = styled.div`
  margin: auto;
`;
