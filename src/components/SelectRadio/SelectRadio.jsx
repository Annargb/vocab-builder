// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Select from "react-select";
// import { selectOptions } from "../../redux/dictionary/dictionarySelectors";
// import { selectStyles } from "../../styles/selectStyles";

// export const SelectRadio = () => {
// //   const options = useSelector(selectOptions);
// //   const [selectedOption, setSelectedOption] = useState(null);
// //   const [verbType, setVerbType] = useState(null);

// //   const dispatch = useDispatch();

// //   const handleSelectChange = (selectedOption) => {
// //     dispatch(setCategory(selectedOption ? selectedOption.value : ""));
// //     setSelectedOption(selectedOption);
// //     if (selectedOption && selectedOption.value !== "verb") {
// //       setVerbType(null);
// //       dispatch(setIsIrregular(false));
// //       dispatch(fetch());
// //     }
// //   };

// //   const handleVerbTypeChange = (event) => {
// //     setVerbType(event.target.value);
// //     dispatch(setIsIrregular(event.target.value === "irregular"));
// //     dispatch(fetch());
// //   };

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
