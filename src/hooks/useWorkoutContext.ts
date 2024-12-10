import React from "react";
import { WorkoutContext } from "../components/WorkoutProvider";

export default function useWorkoutContext() {
  const workout = React.useContext(WorkoutContext);

  if (!workout) {
    throw new Error("Workout context require the use of a Workout Provider");
  }
  return workout;
}
