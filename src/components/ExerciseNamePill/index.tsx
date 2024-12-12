import styles from "./ExerciseNamePill.module.css";
import { Dumbbell, HeartPulse } from "lucide-react";
import { ExercisePillProps } from "../../types";

export default function ExerciseNamePill({ name, type }: ExercisePillProps) {
  return (
    <button className={styles.button}>
      {type === "cardio" ? (
        <HeartPulse className={styles.icon} />
      ) : (
        <Dumbbell className={styles.icon} />
      )}
      <span className={styles.text}>{name}</span>
    </button>
  );
}
