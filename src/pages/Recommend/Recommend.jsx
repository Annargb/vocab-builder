import { useDispatch } from "react-redux";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { useEffect } from "react";
import { fetchRecommendedWords } from "../../redux/recommend/recommendOperations";

const Recommend = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedWords());
  }, [dispatch]);

  return (
    <>
      <Dashboard className="recommend" />
    </>
  );
};

export default Recommend;
