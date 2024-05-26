import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../../redux/recommend/recommendSlice";
import { resetDictionaryFilters } from "../../redux/dictionary/dictionarySlice";
import { fetchTasks } from "../../redux/training/trainingOperations";
import { selectTasks } from "../../redux/training/trainingSelectors";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";
import { Progress } from "../../components/Progress/Progress";
import { TrainingRoom } from "../../components/TrainingRoom/TrainingRoom";

const Training = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(resetFilters());
    dispatch(resetDictionaryFilters());
  }, [dispatch]);

  return (
    <>
      {tasks.length === 0 ? (
        <NotFoundBlock
          title="You don't have a single word to learn right now."
          text="Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study."
          className="training"
        />
      ) : (
        <>
          <Progress className="training" progress={tasks.length} />
          <TrainingRoom />
        </>
      )}
    </>
  );
};

export default Training;
