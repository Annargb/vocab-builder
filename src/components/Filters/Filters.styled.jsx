import styled from "styled-components";

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* margin-bottom: 14px; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  &.dictionary {
    display: none;
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  height: 48px;

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
  background-color: inherit;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${(p) => p.theme.transition};

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.black};
  }

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.mainGreen};
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  width: 20px;
  height: 20px;
`;

export const RadioCointainer = styled.div`
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
  border-radius: 50%;
  border-color: ${(p) => p.theme.colors.radioColor};
  outline: none;
  cursor: pointer;
  transition: border-color 250ms ${(p) => p.theme.transition};

  &:checked {
    border-color: ${(p) => p.theme.colors.mainGreen};

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${(p) => p.theme.colors.mainGreen};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.mainGreen};
  }
`;

export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};
  cursor: pointer;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: self-end;
  gap: 8px;
`;
