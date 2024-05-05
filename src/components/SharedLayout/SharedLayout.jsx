import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/Container";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
