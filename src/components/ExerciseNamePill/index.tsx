import styles from "./ExerciseNamePill.module.css";
import { Dumbbell, HeartPulse } from "lucide-react";
import { ExercisePillProps } from "../../types";

export default function ExerciseNamePill({ name, type }: ExercisePillProps) {
  console.log(type);
  return (
    <button className={styles.button}>
      {type === "cardio" ? (
        <HeartPulse className={styles.heart} />
      ) : (
        <Dumbbell className={styles.dumbbell} />
      )}
      <span className={styles.text}>{name}</span>
    </button>
  );
}
