import { ExerciseType } from "../../types";
import ExerciseDetail from "../ExerciseDetail";
import ExerciseProvider from "../ExerciseProvider";
import GridWrapper from "../GridWrapper";

export default function ExerciseGrid({
  exercises,
}: {
  exercises: ExerciseType[];
}) {
  return (
    <GridWrapper>
      {exercises.map((exercise) => (
        <ExerciseProvider exercise={exercise} key={exercise.slug}>
          <ExerciseDetail />
        </ExerciseProvider>
      ))}
    </GridWrapper>
  );
}
