import React from "react";
import { ExerciseContext } from "../components/ExerciseProvider";

export default function useExerciseContext() {
  const currentExerciseContext = React.useContext(ExerciseContext);

  if (!currentExerciseContext) {
    throw new Error("Exercise Context needs to be used with context provider");
  }

  return currentExerciseContext;
}
