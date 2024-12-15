import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";
import Header from "../Header";
import Footer from "../Footer";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
