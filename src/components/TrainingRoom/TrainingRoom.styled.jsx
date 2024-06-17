import styled from "styled-components";

export const TrainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 116px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 18px;
    margin-bottom: 40px;
    border-radius: 15px;
    background-color: ${(p) => p.theme.colors.snowWhite};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 1240px;
    height: 338px;
    margin-bottom: 80px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const SaveBtn = styled.button`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.mainGreen};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 203px;
    font-size: 18px;
    line-height: 1.56;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`;

export const CancelBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: ${(p) => p.theme.colors.linkColor};

  @media screen and (min-width: 768px) {
    width: 203px;
    font-size: 18px;
    line-height: 1.56;
    color: ${(p) => p.theme.colors.mainGreen};
    border: 1px solid ${(p) => p.theme.colors.mainGreen};
    border-radius: 30px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
  }
`;

export const LabelWrapper = styled.label`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 195px;

  @media screen and (min-width: 768px) {
    min-width: 668px;
    height: 282px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 602px;
    height: 302px;
  }
`;

export const FirstInput = styled.textarea`
  width: 100%;
  max-width: 343px;
  height: 195px;
  padding: 22px 22px 50px 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.tableBorder};
  border-radius: 8px 8px 0 0;
  resize: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.black};

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    min-width: 668px;
    height: 282px;
    font-size: 20px;
    padding: 22px 140px 22px 22px;
    /* padding: 22px 140px 50px 22px; */
  }

  @media screen and (min-width: 1440px) {
    min-width: 602px;
    height: 302px;
    border-bottom: none;
    border-right: 1px solid ${(p) => p.theme.colors.tableBorder};
  }
`;

export const SecondInput = styled(FirstInput)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;

  @media screen and (min-width: 1440px) {
    border-right: none;
  }
`;

export const NextIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${(p) => p.theme.colors.mainGreen};
  transition: fill 250ms ${(p) => p.theme.transition};
`;

export const NextBtn = styled.button`
  position: absolute;
  left: 22px;
  bottom: 19px;
  display: flex;
  align-items: self-start;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.linkColor};

  &:hover ${NextIcon}, &:focus ${NextIcon} {
    fill: ${(p) => p.theme.colors.black};
  }
`;

export const CountryWrapper = styled.div`
  position: absolute;
  right: 22px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    top: 22px;
    bottom: auto;
  }
`;

export const CountryIcon = styled.svg`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Language = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;
