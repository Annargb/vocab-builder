import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
import { selectStyles } from "../../styles/selectStyles";
import debounce from "debounce";
import icons from "../../images/icons.svg";
import * as v from "./Filters.styled";

export const Filters = ({ fetch, setCategory, setKeyword, setIsIrregular }) => {
  const options = useSelector(selectOptions);
  const [selectedOption, setSelectedOption] = useState(null);
  const [verbType, setVerbType] = useState("regular");

  const dispatch = useDispatch();

  const handleSelectChange = (selectedOption) => {
    dispatch(setCategory(selectedOption ? selectedOption.value : ""));
    setSelectedOption(selectedOption);
    if (selectedOption && selectedOption.value !== "verb") {
      dispatch(setIsIrregular(false));
    }
    dispatch(fetch());
  };

  const handleVerbTypeChange = (event) => {
    setVerbType(event.target.value);
    dispatch(setIsIrregular(event.target.value === "irregular"));
    dispatch(fetch());
  };

  const debouncedSearch = debounce((value) => {
    console.log("Searching for:", value);
    dispatch(setKeyword(value));
    dispatch(fetch());
  }, 300);

  const handleInputChange = (e) => {
    const trimmedValue = e.target.value.trim();
    if (trimmedValue) {
      debouncedSearch(trimmedValue);
    }

    // debouncedSearch(e.target.value);
  };

  return (
    <v.InputWrapper
      $notVerb={selectedOption && selectedOption.value !== "verb"}
    >
      <v.Label>
        <v.Input
          type="text"
          placeholder="Find the word"
          onChange={handleInputChange}
        />
        <v.SearchIcon>
          <use href={`${icons}#search`} />
        </v.SearchIcon>
      </v.Label>

      <Select
        defaultValue={selectedOption}
        onChange={handleSelectChange}
        options={options}
        placeholder="Categories"
        styles={selectStyles}
      />

      {selectedOption && selectedOption.value === "verb" && (
        <v.RadioCointainer>
          <v.RadioWrapper>
            <v.RadioButton
              type="radio"
              id="regular"
              value="regular"
              checked={verbType === "regular"}
              onChange={handleVerbTypeChange}
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
            />
            <v.RadioLabel htmlFor="irregular">Irregular</v.RadioLabel>
          </v.RadioWrapper>
        </v.RadioCointainer>
      )}
    </v.InputWrapper>
  );
};
