import styles from "./GridHeader.module.css";
import IconButton from "../IconButton";
import { GridHeaderProps } from "../../types";
import { Link } from "react-router-dom";

export default function GridHeader({ children, icons }: GridHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <h2>{children}</h2>
      <div className={styles.iconwrapper}>
        {icons.map(({ icon, link, slug }) => (
          <Link to={link} key={slug}>
            <IconButton Icon={icon} />
          </Link>
        ))}
      </div>
    </header>
  );
}
