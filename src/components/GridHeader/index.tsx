import styles from "./GridHeader.module.css";
import IconButton from "../IconButton";
import { GridHeaderProps } from "../../types";

export default function GridHeader({ children, icons }: GridHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <h2>{children}</h2>
      <div className={styles.iconwrapper}>
        {icons.map((Icon) => (
          <IconButton Icon={Icon} />
        ))}
      </div>
    </header>
  );
}
