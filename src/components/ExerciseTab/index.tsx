import styles from "./ExeciseTab.module.css";
import { ExerciseTabProps } from "../../types";
import { Dumbbell, HeartPulse, X } from "lucide-react";
import Modal from "../Modal";
import WarningModal from "../WarningModal";

export default function ExerciseTab({
  children,
  type,
  slug,
}: ExerciseTabProps) {
  const ExerciseIcon = type === "strength" ? Dumbbell : HeartPulse;
  return (
    <div className={styles.wrapper}>
      <ExerciseIcon />
      {children}
      <Modal Icon={X} type="simple">
        <WarningModal btnContent={"delete"} slug={slug}>
          Are you sure you want to delete this exercise?
        </WarningModal>
      </Modal>
    </div>
  );
}
