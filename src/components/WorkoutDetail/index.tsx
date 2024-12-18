import styles from "./WorkoutDetail.module.css";
import ExerciseGrid from "../ExerciseGrid";
import WorkoutProvider from "../WorkoutProvider";
import useWorkoutCardData from "../../hooks/useWorkoutCardData";
import AddExerciseModal from "../AddExerciseModal";
import ExercisesProvider from "../ExercisesProvider";
import { useParams } from "react-router-dom";
import DeleteWorkoutModal from "../DeleteWorkoutModal";
import EditWorkoutModal from "../EditWorkoutModal";

export default function WorkoutDetail() {
  const workouts = useWorkoutCardData();
  const { id } = useParams();

  if (!workouts.length) {
    return null;
  }

  const workoutData = workouts.filter(
    ({ workout }) => workout.id === Number(id)
  )[0];

  const { workout, exercises } = workoutData;
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.header}>
        <WorkoutProvider workout={workout}>
          <EditWorkoutModal />
        </WorkoutProvider>
        <ExercisesProvider>
          <AddExerciseModal workout={workout.id} />
        </ExercisesProvider>
        <DeleteWorkoutModal />
      </h1>
      <WorkoutProvider workout={workout}>
        <ExerciseGrid exercises={exercises} />
      </WorkoutProvider>
    </main>
  );
}
