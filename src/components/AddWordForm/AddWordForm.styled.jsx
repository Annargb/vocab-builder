import styled from "styled-components";

export const FormTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const FormText = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.formTextColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
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

export const AddBtn = styled.button`
  max-width: 159px;
  width: 100%;
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
    color: ${(p) => p.theme.colors.white};
    background-color: transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
    padding: 14px;
    min-width: 245px;
  }
`;

export const CancelBtn = styled(AddBtn)`
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
///

export const RadioCointainer = styled.div`
  position: absolute;
  top: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const RadioButton = styled.input`
  flex-shrink: 0;
  position: relative;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(p) => p.theme.colors.white};
  outline: none;
  cursor: pointer;
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:checked {
    border-color: ${(p) => p.theme.colors.white};

    &::before {
      content: "";
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.white};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.white};
  }
`;

export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`;

export const SelectInputWrapper = styled.div`
  position: relative;
  margin-bottom: 62px;

  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

export const Notation = styled.span`
  position: absolute;
  top: 88px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${(p) => p.theme.colors.formTextColor};
`;

export const Error = styled.span`
  position: absolute;
  bottom: -16px;
  /* top: -14px; */
  left: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: ${(p) => p.theme.colors.formTextColor};

  &.category {
    top: -14px;
    bottom: auto;
  }
`;

export const SelectLavel = styled.label`
  position: relative;
`;
