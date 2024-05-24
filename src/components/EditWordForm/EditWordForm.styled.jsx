import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  background-color: inherit;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.inputBorder};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${(p) => p.theme.transition};

  @media screen and (min-width: 375px) {
    width: 311px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 56px;
    padding: 16px 18px;
    font-weight: 400;
    border-color: ${(p) => p.theme.colors.inputTabletBorder};
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.mainGreenHover};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    align-items: flex-start;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const SaveBtn = styled.button`
  max-width: 158px;
  width: 100%;
  height: 48px;
  padding: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
  background-color: ${(p) => p.theme.colors.white};
  border-radius: 30px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.white};
  transition:
    background-color 250ms ${(p) => p.theme.transition},
    color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.mainGreen};
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`;

export const CancelBtn = styled(SaveBtn)`
  max-width: 145px;
  color: ${(p) => p.theme.colors.white};
  background-color: transparent;
  border-color: ${(p) => p.theme.colors.btnBorder};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.black};
    background-color: ${(p) => p.theme.colors.white};
  }
`;

export const LabelText = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${(p) => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const CountryIcon = styled.svg`
  width: 28px;
  height: 28px;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: center;
    gap: 32px;
  }
`;

export const Error = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${(p) => p.theme.colors.formTextColor};
`;
