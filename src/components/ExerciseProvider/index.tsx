import React from "react";
import { ExerciseProviderProps, ExerciseType } from "../../types";

export const ExerciseContext = React.createContext<ExerciseType | null>(null);

export default function ExerciseProvider({
  children,
  exercise,
}: ExerciseProviderProps) {
  return (
    <ExerciseContext.Provider value={exercise}>
      {children}
    </ExerciseContext.Provider>
  );
}
