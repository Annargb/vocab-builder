import * as v from "./ImageBackground.styled";

export const ImageBackground = ({ $register }) => {
  return (
    <v.Wrapper $register={$register}>
      <v.ImgContainer></v.ImgContainer>
      <v.SubText $register={$register}>
        Word · Translation · Grammar · Progress
      </v.SubText>
    </v.Wrapper>
  );
};
