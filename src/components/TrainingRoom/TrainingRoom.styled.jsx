import styled from "styled-components";

export const TrainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.label`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 195px;

  @media screen and (min-width: 768px) {
    width: 668px;
    height: 282px;
  }
`;

export const FirstInput = styled.textarea`
  width: 100%;
  max-width: 343px;
  height: 195px;
  padding: 22px;
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
    max-width: 668px;
    height: 282px;
    font-size: 20px;
  }
`;

export const SecondInput = styled(FirstInput)`
  text-transform: capitalize;
  border-bottom: none;
  border-radius: 0 0 8px 8px;
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
