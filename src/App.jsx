import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
// import { selectIsRefreshing } from "./redux/auth/authSelectors";
import { refreshUser } from "./redux/auth/authOperation";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";

const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));

const Dictionary = lazy(() => import("./pages/Dictionary/Dictionary"));
const Recommend = lazy(() => import("./pages/Recommend/Recommend"));
const Training = lazy(() => import("./pages/Training/Training"));

// const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/dictionary" component={<Login />} />
            }
          />

          <Route
            path="/dictionary"
            element={
              <PrivateRoute redirectTo="/login" component={<Dictionary />} />
            }
          />
          <Route
            path="/recommend"
            element={
              <PrivateRoute redirectTo="/login" component={<Recommend />} />
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/login" component={<Training />} />
            }
          />

          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

/* <Route path="register" element={<Register />} /> */
/* <Route path="login" element={<Login />} /> */
/* <Route path="dictionary" element={<Dictionary />} /> */
/* <Route path="recommend" element={<Recommend />} /> */
/* <Route path="training" element={<Training />} /> */
