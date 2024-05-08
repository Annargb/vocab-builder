import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  position: absolute;
  right: 0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  width: 100%;
  /* height: 549px; */
  padding: 32px 16px 57px 16px;
  border-radius: 25px 25px 0 0;
  background-color: ${(p) => p.theme.colors.formBgColor};

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    position: static;
    width: 627px;
    /* height: 591px; */
    padding: 48px 64px;
    border-radius: 30px;
  }
`;

export const Form = styled.form`
  margin-bottom: 16px;
`;

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
  width: 100%;

  @media screen and (min-width: 375px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Input = styled.input`
  width: 100%;
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

  @media screen and (min-width: 375px) {
    width: 343px;
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
  width: 100%;
  padding: 16px 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.white};
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.mainGreen};
  transition: background-color 250ms ${(p) => p.theme.transition};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.mainGreenHover};
  }
`;

export const NavigateLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  /* text-decoration: underline; */
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.linkColor};

  &::after {
    content: "";
    position: absolute;
    bottom: 4px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(p) => p.theme.colors.linkColor};
  }
`;
