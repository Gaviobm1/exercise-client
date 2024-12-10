import React from "react";
import { WorkoutCardType, WorkoutsProviderProps } from "../../types";

export const WorkoutsContext = React.createContext<WorkoutCardType[] | null>(
  null
);

export default function WorkoutsProvider({
  children,
  workouts,
}: WorkoutsProviderProps) {
  return (
    <WorkoutsContext.Provider value={workouts}>
      {children}
    </WorkoutsContext.Provider>
  );
}
