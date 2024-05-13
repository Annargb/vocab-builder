import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
import { selectStyles } from "../../styles/selectStyles";

export const Filters = () => {
  const options = useSelector(selectOptions);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [regular, setRregular] = useState(true);
  const [verbType, setVerbType] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption.value !== "verb") {
      // Якщо обрано категорію "verb", скидаємо обраний тип дієслова
      setVerbType(null);
    }
  };

  const handleVerbTypeChange = (event) => {
    verbType(event.target.value);
  };

  return (
    <div>
      <Select
        defaultValue={handleSelectChange}
        onChange={setSelectedOption}
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
  );
};
