import styled from "styled-components";

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
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

///
export const RadioInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const RadioContainer = styled.div`
  /* display: inline-block; */
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CustomRadio = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(p) => p.theme.colors.radioColor};
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.colors.black};
`;
