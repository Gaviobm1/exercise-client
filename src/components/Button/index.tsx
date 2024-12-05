import styles from "./Button.module.css";
import { ButtonProps } from "../../types";

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
}
