import * as v from "./TrainingRoom.styled";
import icons from "../../images/icons.svg";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectTasks,
} from "../../redux/training/trainingSelectors";
import { sendAnswers } from "../../redux/training/trainingOperations";
import { CommonModal } from "../CommonModal/CommonModal";
import { useModalState } from "../../hooks/useModalState";

export const TrainingRoom = () => {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const dispatch = useDispatch();
  const { isModalOpen, openModal, closeModal } = useModalState();
  const error = useSelector(selectError);

  const tasks = useSelector(selectTasks);
  const currentData = tasks[index];
  const translationInputValue = currentData.ua || currentData.en;
  const tasksLanguage = currentData.task === "en" ? "English" : "Ukrainian";
  const tasksIcon = currentData.task === "en" ? "uk" : "ukraine";
  const translationLanguage =
    currentData.task === "ua" ? "English" : "Ukrainian";
  const translationIcon = currentData.task === "ua" ? "uk" : "ukraine";

  // const handleSave = (currentData, value) => {
  //   const key = currentData.task;
  //   const newValue = {
  //     ...currentData,
  //     [key]: value,
  //   };

  //   const updatedResults = [...results, newValue];
  //   setResults(updatedResults);
  // };

  const handleSave = (currentData, value) => {
    return new Promise((resolve) => {
      console.log(currentData);
      const key = currentData.task;
      const newValue = {
        ...currentData,
        [key]: value,
      };

      const updatedResults = [...results, newValue];
      setResults(updatedResults);
      console.log(updatedResults);
      resolve(updatedResults);
    });
  };

  const handleNext = () => {
    // Save the current input value
    if (inputValue) {
      handleSave(currentData, inputValue);
    }

    // Clear the input and move to the next item
    setInputValue("");
    setIndex((prevIndex) => prevIndex + 1);
  };

  // const saveAnswers = () => {
  //   handleSave(currentData, inputValue);
  //   // dispatch(sendAnswers(results));
  // };

  const saveAnswers = async () => {
    console.log(inputValue);
    const updatedResults = await handleSave(currentData, inputValue);
    dispatch(sendAnswers(updatedResults));
    if (!error) {
      openModal();
    }
  };

  return (
    <div>
      <v.TrainContainer>
        <v.LabelWrapper>
          <v.FirstInput
            type="text"
            value={inputValue}
            placeholder="Введіть переклад"
            onChange={(e) => setInputValue(e.target.value)}
          ></v.FirstInput>

          {tasks.length - 1 > index && (
            <v.NextBtn onClick={handleNext} type="button">
              Next
              <v.NextIcon>
                <use href={`${icons}#link-arrow`} />
              </v.NextIcon>
            </v.NextBtn>
          )}
          <v.CountryWrapper>
            <v.CountryIcon>
              <use href={`${icons}#${tasksIcon}`} />
            </v.CountryIcon>
            <v.Language>{tasksLanguage}</v.Language>
          </v.CountryWrapper>
        </v.LabelWrapper>

        <v.LabelWrapper>
          <v.SecondInput
            type="text"
            value={translationInputValue}
            readOnly
          ></v.SecondInput>
          <v.CountryWrapper>
            <v.CountryIcon>
              <use href={`${icons}#${translationIcon}`} />
            </v.CountryIcon>
            <v.Language>{translationLanguage}</v.Language>
          </v.CountryWrapper>
        </v.LabelWrapper>
      </v.TrainContainer>
      <v.BtnContainer>
        <v.SaveBtn type="button" onClick={saveAnswers}>
          Save
        </v.SaveBtn>
        <v.CancelBtn type="button">Cancel</v.CancelBtn>
      </v.BtnContainer>
      <CommonModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        // className="mobileMenu"
      ></CommonModal>
    </div>
  );
};
