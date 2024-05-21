import { AddWordBtn } from "../AddWordBtn/AddWordBtn";
import { Filters } from "../Filters/Filters";
import { Statistics } from "../Statistics/Statistics";
import * as v from "./Dashboard.styled";

export const Dashboard = ({
  className,
  fetch,
  setCategory,
  setKeyword,
  setIsIrregular,
  openModal,
}) => {
  return (
    <v.DashboardWrapper>
      <Filters
        fetch={fetch}
        setCategory={setCategory}
        setKeyword={setKeyword}
        setIsIrregular={setIsIrregular}
        className={className}
      />
      <v.StatsBtnContainer>
        <Statistics />
        <AddWordBtn className={className} openModal={openModal} />
      </v.StatsBtnContainer>
    </v.DashboardWrapper>
  );
};
