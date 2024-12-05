import WorkoutCard from "../WorkoutCard";
import { WorkoutCardType } from "../../types";

export default function ExerciseGrid({
  workoutData,
}: {
  workoutData: WorkoutCardType[];
}) {
  return (
    <main>
      {workoutData.map((workout) => (
        <WorkoutCard workoutCardData={workout} />
      ))}
    </main>
  );
}
