import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Podcasts } from "./pages/Podcasts";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Route>
      </Routes>
    </>
  );
}