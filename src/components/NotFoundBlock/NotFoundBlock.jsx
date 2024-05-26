import * as v from "./NotFoundBlock.styled";

export const NotFoundBlock = ({ title, text, className }) => {
  return (
    <v.NotFoundWrapper className={className}>
      <v.ImgContainer></v.ImgContainer>
      <v.TextBtnContainer>
        <v.NotFoundTitle>{title}</v.NotFoundTitle>
        <v.NotFoundText className={className}>{text}</v.NotFoundText>
        <v.AddWordLink to="/dictionary" className={className}>
          Add word
        </v.AddWordLink>
      </v.TextBtnContainer>
    </v.NotFoundWrapper>
  );
};
