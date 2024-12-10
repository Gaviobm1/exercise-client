import Modal from "../Modal";
import { DetailHeaderProps } from "../../types";
import EditExerciseDetail from "../EditExerciseDetail";
import styles from "./DetailHeader.module.css";

export default function DetailHeader({ children, Icon }: DetailHeaderProps) {
  return (
    <header className={styles.headerwrapper}>
      <h3 className={styles.titlewrapper}>
        <Icon size={32} />
        {children}
      </h3>
      <Modal btnText="edit">
        <EditExerciseDetail />
      </Modal>
    </header>
  );
}
