import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
import { selectStyles } from "../../styles/selectStyles";
import debounce from "debounce";
import icons from "../../images/icons.svg";
import * as v from "./Filters.styled";
import {
  setCategory,
  setIsIrregular,
  setKeyword,
} from "../../redux/recommend/recommendSlice";
import { fetchRecommendedWords } from "../../redux/recommend/recommendOperations";

export const Filters = () => {
  const options = useSelector(selectOptions);
  const { register } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const [verbType, setVerbType] = useState(null);

  const dispatch = useDispatch();

  const handleSelectChange = (selectedOption) => {
    dispatch(setCategory(selectedOption ? selectedOption.value : ""));
    setSelectedOption(selectedOption);
    if (selectedOption && selectedOption.value !== "verb") {
      setVerbType(null);
      dispatch(setIsIrregular(false));
      dispatch(fetchRecommendedWords());
    }
  };

  const handleVerbTypeChange = (event) => {
    setVerbType(event.target.value);
    dispatch(setIsIrregular(event.target.value === "irregular"));
    dispatch(fetchRecommendedWords());
  };

  const debouncedSearch = debounce((value) => {
    console.log("Searching for:", value);
    dispatch(setKeyword(value));
    dispatch(fetchRecommendedWords());
  }, 300);

  const handleInputChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <v.InputWrapper>
      <v.Label>
        <v.Input
          {...register("searchInput")}
          type="text"
          placeholder="Find the word"
          onChange={handleInputChange}
        />
        <v.SearchIcon>
          <use href={`${icons}#search`} />
        </v.SearchIcon>
      </v.Label>

      <div>
        <Select
          defaultValue={selectedOption}
          onChange={handleSelectChange}
          options={options}
          placeholder="Categories"
          styles={selectStyles}
        />

        {selectedOption && selectedOption.value === "verb" && (
          <div>
            <label>
              <input
                type="radio"
                value="regular"
                checked={verbType === "regular"}
                onChange={handleVerbTypeChange}
              />
              Regular
            </label>
            <label>
              <input
                type="radio"
                value="irregular"
                checked={verbType === "irregular"}
                onChange={handleVerbTypeChange}
              />
              Irregular
            </label>
          </div>
        )}
      </div>
    </v.InputWrapper>
  );
};

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Select from "react-select";
// import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
// import { selectStyles } from "../../styles/selectStyles";

// export const Filters = () => {
//   const options = useSelector(selectOptions);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [verbType, setVerbType] = useState(null);

//   const handleSelectChange = (selectedOption) => {
//     setSelectedOption(selectedOption);
//     if (selectedOption && selectedOption.value !== "verb") {
//       setVerbType(null);
//     }
//   };

//   const handleVerbTypeChange = (event) => {
//     setVerbType(event.target.value);
//   };

//   return (
//     <div>
//       <Select
//         defaultValue={selectedOption}
//         onChange={handleSelectChange}
//         options={options}
//         placeholder="Categories"
//         styles={selectStyles}
//       />

//       {selectedOption && selectedOption.value === "verb" && (
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="regular"
//               checked={verbType === "regular"}
//               onChange={handleVerbTypeChange}
//             />
//             Regular
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="irregular"
//               checked={verbType === "irregular"}
//               onChange={handleVerbTypeChange}
//             />
//             Irregular
//           </label>
//         </div>
//       )}
//     </div>
//   );
// };
