import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/recommend/recommendSlice";
import { resetDictionaryFilters } from "../../redux/dictionary/dictionarySlice";
import { fetchTasks } from "../../redux/training/trainingOperations";

const Training = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(resetFilters());
    dispatch(resetDictionaryFilters());
  }, [dispatch]);

  return <div>Training</div>;
};

export default Training;
