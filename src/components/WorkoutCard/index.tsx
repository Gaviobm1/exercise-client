import { format } from "date-fns";
import ExerciseNamePill from "../ExerciseNamePill";
import { WorkoutCardType } from "../../types";
import { CircleChevronRight } from "lucide-react";
import styles from "./WorkoutCard.module.css";
export default function WorkoutCard({ date }: { date: Date }) {
  const dateStr = format(date, "dd/MM/yyyy");
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{dateStr}</h1>
        <CircleChevronRight className={styles.icon} />
      </header>
      <main className={styles.grid}>
        <ExerciseNamePill name="threadmill" exerciseId={3} type="cardio" />
        <ExerciseNamePill name="threadmill" exerciseId={3} type="cardio" />
        <ExerciseNamePill name="threadmill" exerciseId={3} type="cardio" />
        <ExerciseNamePill
          name="threadmill"
          exerciseId={3}
          type="cardio"
          easy={true}
        />
      </main>
    </article>
  );
}
