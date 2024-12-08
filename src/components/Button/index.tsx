import styles from "./Button.module.css";
import { ButtonProps } from "../../types";

export default function Button({ children, ...delegated }: ButtonProps) {
  return (
    <button className={styles.button} {...delegated}>
      {children}
    </button>
  );
}
