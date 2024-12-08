import { WorkoutCardType } from "../../types";
import styles from "./WorkoutDetail.module.css";
import { formatToDateTitle } from "../../helpers";
import ExerciseGrid from "../ExerciseGrid";

export default function WorkoutDetail({ workout, exercises }: WorkoutCardType) {
  const { date } = workout;
  const dateStr = formatToDateTitle(date);
  return (
    <main className={styles.wrapper}>
      <h1>{dateStr}</h1>
      <ExerciseGrid exercises={exercises} />
    </main>
  );
}
