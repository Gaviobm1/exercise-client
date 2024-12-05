import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function UserLayout() {
  return (
    <div>
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
}