import styles from "./CloseButton.module.css";
import { X } from "lucide-react";

export default function CloseButton({
  handleClick,
}: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button className={styles.closebtn} onClick={handleClick}>
      <X />
    </button>
  );
}
