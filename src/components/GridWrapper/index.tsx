import styles from "./GridWrapper.module.css";
import { GridWrapperProps } from "../../types";

export default function GridWrapper({
  children,
  ...delegated
}: GridWrapperProps) {
  return (
    <main className={styles.wrapper} {...delegated}>
      {children}
    </main>
  );
}
