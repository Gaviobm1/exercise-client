import DarkModeButton from "../DarkModeButton";
import NavLinks from "../NavLinks";
import { navLinks } from "../../helpers";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <h1>my exercise journal</h1>
      <div className={styles.controls}>
        <NavLinks navlinks={navLinks} />
        <DarkModeButton />
      </div>
    </header>
  );
}
