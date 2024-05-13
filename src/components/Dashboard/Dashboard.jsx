import { AddWordBtn } from "../AddWordBtn/AddWordBtn";
import { Filters } from "../Filters/Filters";
import { Statistics } from "../Statistics/Statistics";

export const Dashboard = () => {
  return (
    <div>
      <Filters />
      <Statistics />
      <AddWordBtn />
    </div>
  );
};
