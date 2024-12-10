import styles from "./Form.module.css";
import { FormProps } from "react-router-dom";

export default function Form({ children, ...delegated }: FormProps) {
  return (
    <form className={styles.wrapper} {...delegated}>
      {children}
    </form>
  );
}
