import { useDispatch } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import { fetchSelectOptions } from "../../redux/dictionary/dictionaryOperations";

const Dictionary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSelectOptions());
  }, [dispatch]);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Dictionary;
