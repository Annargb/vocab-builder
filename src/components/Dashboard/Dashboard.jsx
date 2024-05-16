import { AddWordBtn } from "../AddWordBtn/AddWordBtn";
import { Filters } from "../Filters/Filters";
import { Statistics } from "../Statistics/Statistics";

export const Dashboard = ({
  className,
  fetch,
  setCategory,
  setKeyword,
  setIsIrregular,
}) => {
  return (
    <div>
      <Filters
        fetch={fetch}
        setCategory={setCategory}
        setKeyword={setKeyword}
        setIsIrregular={setIsIrregular}
      />
      <Statistics />
      <AddWordBtn className={className} />
    </div>
  );
};
