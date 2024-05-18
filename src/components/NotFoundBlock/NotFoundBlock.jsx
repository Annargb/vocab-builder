import * as v from "./NotFoundBlock.styled";

export const NotFoundBlock = ({ title, text }) => {
  return (
    <v.NotFoundWrapper>
      <v.ImgContainer></v.ImgContainer>
      <v.TextBtnContainer>
        <v.NotFoundTitle>{title}</v.NotFoundTitle>
        <v.NotFoundText>{text}</v.NotFoundText>
      </v.TextBtnContainer>
    </v.NotFoundWrapper>
  );
};
