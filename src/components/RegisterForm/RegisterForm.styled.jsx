import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 1.5;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 343px;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  border-radius: 15px;
  outline: none;
  transition: border-color 250ms ${(p) => p.theme.transition};

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${(p) => p.theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  &.error {
    border-color: ${(p) => p.theme.colors.errorColor};
  }

  &.valid {
    border-color: ${(p) => p.theme.colors.successColor};
  }

  &:hover,
  &:focus {
    border-color: ${(p) => p.theme.colors.mainGreen};
  }
`;

export const SubmitButton = styled.button`
  padding: 16px 139px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.mainGreen};
  transition: background-color 250ms ${(p) => p.theme.transition};

  @media screen and (min-width: 768px) {
    padding: 16px 213px;
    font-size: 18px;
    line-height: 1.56;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.mainGreenHover};
  }
`;
