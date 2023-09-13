import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function Layout() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
      <Footer />
    </>
  );
}
