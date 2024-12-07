import styles from "./GridHeader.module.css";
import { GridHeaderProps } from "../../types";

export default function GridHeader({ title, icons }: GridHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.iconwrapper}>
        {icons.map((Icon) => (
          <Icon />
        ))}
      </div>
    </header>
  );
}
