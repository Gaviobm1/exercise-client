import React from "react";
import { WorkoutType, WorkoutProviderProps } from "../../types";

export const WorkoutContext = React.createContext<WorkoutType | null>(null);

export default function WorkoutProvider({
  children,
  workout,
}: WorkoutProviderProps) {
  return (
    <WorkoutContext.Provider value={workout}>
      {children}
    </WorkoutContext.Provider>
  );
}
