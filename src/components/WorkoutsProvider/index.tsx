import React from "react";
import { WorkoutCardType, WorkoutsProviderProps } from "../../types";
import useWorkoutCardData from "../../hooks/useWorkoutCardData";

export const WorkoutsContext = React.createContext<WorkoutCardType[] | null>(
  null
);

export default function WorkoutsProvider({ children }: WorkoutsProviderProps) {
  const workouts = useWorkoutCardData();

  return (
    <WorkoutsContext.Provider value={workouts}>
      {children}
    </WorkoutsContext.Provider>
  );
}
