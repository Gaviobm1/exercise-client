import { DetailHeaderProps } from "../../types";
import EditExerciseDetail from "../EditExerciseDetail";
import DeleteExerciseModal from "../DeleteExerciseModal";
import styles from "./DetailHeader.module.css";

export default function DetailHeader({ children, Icon }: DetailHeaderProps) {
  return (
    <header className={styles.headerwrapper}>
      <h3 className={styles.titlewrapper}>
        <Icon size={32} />
        {children}
      </h3>
      <div className={styles.triggerWrapper}>
        {" "}
        <EditExerciseDetail />
        <DeleteExerciseModal />
      </div>
    </header>
  );
}
