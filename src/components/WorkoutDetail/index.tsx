import styles from "./WorkoutDetail.module.css";
import { formatToDateTitle, getWorkout } from "../../helpers";
import ExerciseGrid from "../ExerciseGrid";
import { useParams } from "react-router-dom";
import useWorkoutsContext from "../../hooks/useWorkoutsContext";
import WorkoutProvider from "../WorkoutProvider";

export default function WorkoutDetail() {
  const workouts = useWorkoutsContext();
  const { id } = useParams();
  const workoutData = getWorkout(workouts, Number(id));

  const { workout, exercises } = workoutData;
  const { date } = workout;
  const dateStr = formatToDateTitle(date);
  return (
    <main className={styles.wrapper}>
      <h1>{dateStr}</h1>
      <WorkoutProvider workout={workout}>
        <ExerciseGrid exercises={exercises} />
      </WorkoutProvider>
    </main>
  );
}
