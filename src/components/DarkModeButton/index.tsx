import React from "react";
import { Sun, Moon } from "lucide-react";
import RiseFallDiv from "../RiseFallDiv";
import styles from "./DarkModeButton.module.css";

export default function DarkModeButton() {
  const [isDark, setIsDark] = React.useState(true);
  return (
    <button className={styles.btn} onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <RiseFallDiv direction="rise">
          <Sun />
        </RiseFallDiv>
      ) : (
        <RiseFallDiv direction="fall">
          <Moon />
        </RiseFallDiv>
      )}
    </button>
  );
}
