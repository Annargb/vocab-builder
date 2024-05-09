import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
  background-color: ${(p) => p.theme.colors.whiteBg};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;

    //
    /* background-image: linear-gradient(
      292deg,
      rgba(133, 170, 159, 0.51) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: right bottom; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;
