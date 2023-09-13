import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Outlet />
    </>
  );
}
