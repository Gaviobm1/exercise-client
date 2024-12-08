import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
