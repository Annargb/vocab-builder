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
}) => {
  return (
    <v.DashboardWrapper>
      <Filters
        fetch={fetch}
        setCategory={setCategory}
        setKeyword={setKeyword}
        setIsIrregular={setIsIrregular}
      />
      <v.StatsBtnContainer>
        <Statistics />
        <AddWordBtn className={className} />
      </v.StatsBtnContainer>
    </v.DashboardWrapper>
  );
};
