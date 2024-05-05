import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const Nannies = lazy(() => import("./pages/Nannies/Nannies"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="nannies" element={<Nannies />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
