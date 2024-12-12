import ExercisesProvider from "../ExercisesProvider";
import AddWorkout from "../AddWorkout";

export default function AddWorkoutWrapper() {
  return (
    <ExercisesProvider>
      <AddWorkout />
    </ExercisesProvider>
  );
}
