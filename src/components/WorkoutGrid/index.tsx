import WorkoutCard from "../WorkoutCard";
import { WorkoutCardType } from "../../types";
import styles from "./WorkoutGrid.module.css";

export default function ExerciseGrid({
  workoutData,
}: {
  workoutData: WorkoutCardType[];
}) {
  return (
    <main className={styles.wrapper}>
      {workoutData.map(({ workout, exercises }) => (
        <WorkoutCard workout={workout} exercises={exercises} />
      ))}
    </main>
  );
}
