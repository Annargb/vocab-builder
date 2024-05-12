import { useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
import { selectStyles } from "../../styles/selectStyles";

export const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = useSelector(selectOptions);

  console.log(selectedOption.value);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Categories"
        styles={selectStyles}
      />
    </div>
  );
};
