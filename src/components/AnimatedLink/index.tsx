import { Link } from "react-router-dom";
import { AnimatedLinkProps } from "../../types";
import styles from "./AnimatedLink.module.css";

export default function AnimatedLink({
  children,
  linkProps,
  ...delegated
}: AnimatedLinkProps) {
  return (
    <span className={styles.wrapper}>
      <Link className={styles.link} {...linkProps} {...delegated}>
        {children}
      </Link>
    </span>
  );
}
