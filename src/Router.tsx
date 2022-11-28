import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Podcasts } from "./pages/Podcasts";
import { Host } from "./pages/Host";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/host" element={<Host />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}