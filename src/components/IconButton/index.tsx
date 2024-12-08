import styles from "./IconButton.module.css";
import { IconButtonProps } from "../../types";

export default function IconButton({
  Icon,
  iconProps,
  ...delegated
}: IconButtonProps) {
  return (
    <button className={styles.btn} {...delegated}>
      <Icon {...iconProps} />
    </button>
  );
}
