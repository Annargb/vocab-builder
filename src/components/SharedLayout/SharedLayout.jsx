import { Suspense } from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/Container";
import { Toaster } from "react-hot-toast";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};

export default SharedLayout;
