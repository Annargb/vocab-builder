import * as v from "./AddWordForm.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addWordSchema } from "../../schemas/schemas";
import icons from "../../images/icons.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
import Select from "react-select";
import { addWordSelectStyles } from "../../styles/selectStyles";
import {
  createWord,
  fetchOwnWords,
} from "../../redux/dictionary/dictionaryOperations";

export const AddWordForm = ({ closeModal }) => {
  const options = useSelector(selectOptions);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  // const [verbType, setVerbType] = useState("regular");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addWordSchema),
  });
  const onSubmit = (data) => {
    if (data.category === "verb") {
      setValue("isIrregular", verbType === "irregular");
    } else {
      delete delete data.isIrregular;
    }
    delete data.verbType;
    console.log(data);
    dispatch(createWord(data));
    dispatch(fetchOwnWords());
    closeModal();
  };

  const verbType = watch("verbType", "regular");

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setValue("category", selectedOption ? selectedOption.value : null);
  };

  const handleVerbTypeChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setValue("verbType", value);
    // setVerbType(event.target.value);
    console.log(value);
    // setValue("isIrregular", value === "irregular");
  };

  return (
    <div>
      <v.FormTitle>Add word</v.FormTitle>
      <v.FormText>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </v.FormText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <v.SelectInputWrapper>
          <v.SelectLavel>
            <Select
              defaultValue={selectedOption}
              onChange={handleSelectChange}
              options={options}
              placeholder="Categories"
              styles={addWordSelectStyles}
            />
            <input
              type="hidden"
              {...register("category")}
              value={selectedOption || ""}
            />

            {errors.category && (
              <v.Error className="category">{errors.category?.message}</v.Error>
            )}
          </v.SelectLavel>

          {selectedOption && selectedOption.value === "verb" && (
            <>
              <v.RadioCointainer>
                <v.RadioWrapper>
                  <v.RadioButton
                    type="radio"
                    id="regular"
                    value="regular"
                    checked={verbType === "regular"}
                    onChange={handleVerbTypeChange}
                    // {...register("isIrregular")}
                    {...register("verbType")}
                  />
                  <v.RadioLabel htmlFor="regular">Regular</v.RadioLabel>
                </v.RadioWrapper>
                <v.RadioWrapper>
                  <v.RadioButton
                    type="radio"
                    id="irregular"
                    value="irregular"
                    checked={verbType === "irregular"}
                    onChange={handleVerbTypeChange}
                    // {...register("isIrregular")}
                    {...register("verbType")}
                  />
                  <v.RadioLabel htmlFor="irregular">Irregular</v.RadioLabel>
                </v.RadioWrapper>
              </v.RadioCointainer>
              {verbType === "irregular" && (
                <v.Notation>
                  Such data must be entered in the format I form-II form-III
                  form.
                </v.Notation>
              )}
            </>
          )}
        </v.SelectInputWrapper>

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
          <v.AddBtn type="submit">Add</v.AddBtn>
          <v.CancelBtn type="button" onClick={() => closeModal()}>
            Cancel
          </v.CancelBtn>
        </v.ButtonWrapper>
      </form>
    </div>
  );
};
