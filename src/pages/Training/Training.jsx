import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/recommend/recommendSlice";

const Training = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  return <div>Training</div>;
};

export default Training;
