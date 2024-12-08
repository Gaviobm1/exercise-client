import Button from "../Button";
import { DetailHeaderProps } from "../../types";
import styles from "./DetailHeader.module.css";

export default function DetailHeader({
  children,
  Icon,
  btnText,
  handleClick,
}: DetailHeaderProps) {
  return (
    <header className={styles.headerwrapper}>
      <h3 className={styles.titlewrapper}>
        <Icon size={32} />
        {children}
      </h3>
      <Button handleClick={handleClick}>{btnText}</Button>
    </header>
  );
}
