import DarkModeButton from "../DarkModeButton";
import NavLinks from "../NavLinks";
import { navLinks } from "../../data";
import styles from "./Header.module.css";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          <Link to="/">my exercise journal</Link>
        </h1>

        <div className={styles.controls}>
          <NavLinks navlinks={navLinks} />
          <DarkModeButton />
        </div>
        <div className={styles.mobileControls}>
          <AlignJustify />
        </div>
      </header>
    </div>
  );
}
