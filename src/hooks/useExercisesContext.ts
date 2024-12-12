import React from "react";
import { ExercisesContext } from "../components/ExercisesProvider";

export default function useExercisesContext() {
  const context = React.useContext(ExercisesContext);

  if (!context) {
    throw new Error(
      "Exercises context requires use of the Exercises context provider"
    );
  }

  const { exercises, setExercises } = context;

  return { exercises, setExercises };
}
