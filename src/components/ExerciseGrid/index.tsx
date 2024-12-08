import { ExerciseType } from "../../types";
import ExerciseDetail from "../ExerciseDetail";

export default function ExerciseGrid({
  exercises,
}: {
  exercises: ExerciseType[];
}) {
  return (
    <div>
      {exercises.map(({ name, exerciseData }) => (
        <ExerciseDetail name={name} exerciseData={exerciseData} />
      ))}
    </div>
  );
}
