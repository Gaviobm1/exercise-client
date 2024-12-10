import React from "react";
import { WorkoutsContext } from "../components/WorkoutsProvider";

export default function useWorkoutsContext() {
  const workouts = React.useContext(WorkoutsContext);

  if (!workouts) {
    throw new Error("Workout context require the use of a Workout Provider");
  }
  return workouts;
}
