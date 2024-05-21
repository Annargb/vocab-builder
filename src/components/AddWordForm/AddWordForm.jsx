import * as v from "./AddWordForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addWordSchema } from "../../schemas/schemas";
import icons from "../../images/icons.svg";

export const AddWordForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addWordSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <v.FormTitle>Add word</v.FormTitle>
      <v.FormText>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </v.FormText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <v.InputWrapper>
          <v.Label>
            <v.IconTextWrapper>
              <v.CountryIcon>
                <use href={`${icons}#ukraine`} />
              </v.CountryIcon>
              <v.LabelText>Ukrainian</v.LabelText>
            </v.IconTextWrapper>
            <v.Input {...register("ua")} type="text" />
          </v.Label>

          <v.Label>
            <v.IconTextWrapper>
              <v.CountryIcon>
                <use href={`${icons}#uk`} />
              </v.CountryIcon>
              <v.LabelText>English</v.LabelText>
            </v.IconTextWrapper>
            <v.Input {...register("en")} type="text" />
          </v.Label>
        </v.InputWrapper>

        <v.ButtonWrapper>
          <v.AddBtn type="submit">Add</v.AddBtn>
          <v.CancelBtn type="button" onClick={() => closeModal()}>
            Cancel
          </v.CancelBtn>
        </v.ButtonWrapper>
      </form>
    </div>
  );
};
