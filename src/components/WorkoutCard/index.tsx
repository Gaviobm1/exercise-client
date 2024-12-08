import { formatToDateTitle } from "../../helpers";
import ExerciseNamePill from "../ExerciseNamePill";
import { WorkoutCardType } from "../../types";
import { CircleChevronRight } from "lucide-react";
import IconButton from "../IconButton";
import styles from "./WorkoutCard.module.css";

export default function WorkoutCard({ workout, exercises }: WorkoutCardType) {
  const { date } = workout;
  const dateStr = formatToDateTitle(date);

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>{dateStr}</h1>
        <IconButton Icon={CircleChevronRight} iconProps={{ size: 32 }} />
      </header>
      <main className={styles.grid}>
        {exercises.map(({ name, id, exerciseData }) => (
          <ExerciseNamePill
            name={name}
            exerciseId={id}
            type={exerciseData.type}
          />
        ))}
      </main>
    </article>
  );
}
