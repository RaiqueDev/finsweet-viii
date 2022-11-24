import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";      
import { Navbar } from "../components/Navbar";
import { Sponsors } from "../components/Sponsors";

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Sponsors />
      <Footer />
    </>
  );
}