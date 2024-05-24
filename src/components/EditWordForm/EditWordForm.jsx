import * as v from "./EditWordForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editWordSchema } from "../../schemas/schemas";
import icons from "../../images/icons.svg";
import { useDispatch } from "react-redux";
import { editWord } from "../../redux/dictionary/dictionaryOperations";

export const EditWordForm = ({ closeModal, word }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(editWordSchema),
    defaultValues: {
      ua: word.ua,
      en: word.en,
    },
  });
  const onSubmit = (data) => {
    const editedWord = {
      ...data,
      category: word.category,
    };

    if (word.isIrregular !== undefined) {
      editedWord.isIrregular = word.isIrregular;
    }

    console.log(editedWord);
    // console.log(word._id);
    dispatch(editWord({ id: word._id, data: editedWord }));
    closeModal();
  };

  return (
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

          {(dirtyFields.ua || errors.ua) && (
            <v.Error>{errors.ua?.message}</v.Error>
          )}
        </v.Label>

        <v.Label>
          <v.IconTextWrapper>
            <v.CountryIcon>
              <use href={`${icons}#uk`} />
            </v.CountryIcon>
            <v.LabelText>English</v.LabelText>
          </v.IconTextWrapper>
          <v.Input {...register("en")} type="text" />

          {(dirtyFields.en || errors.en) && (
            <v.Error>{errors.en?.message}</v.Error>
          )}
        </v.Label>
      </v.InputWrapper>

      <v.ButtonWrapper>
        <v.SaveBtn type="submit">Save</v.SaveBtn>
        <v.CancelBtn type="button" onClick={() => closeModal()}>
          Cancel
        </v.CancelBtn>
      </v.ButtonWrapper>
    </form>
  );
};
