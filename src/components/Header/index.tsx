import DarkModeButton from "../DarkModeButton";
import NavLinks from "../NavLinks";
import { navLinks } from "../../data";
import styles from "./Header.module.css";

export default function Header() {
  const user = true;
  return (
    <header className={styles.wrapper}>
      <h1>my exercise journal</h1>
      {user && (
        <div className={styles.controls}>
          <NavLinks navlinks={navLinks} />
          <DarkModeButton />
        </div>
      )}
    </header>
  );
}
