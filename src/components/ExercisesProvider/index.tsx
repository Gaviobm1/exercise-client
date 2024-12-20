import React from "react";
import { ExerciseType, ExercisesContextProps } from "../../types";

export const ExercisesContext =
  React.createContext<ExercisesContextProps | null>(null);

export default function ExercisesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [exercises, setExercises] = React.useState<ExerciseType[] | []>([]);

  const value = {
    exercises,
    setExercises,
  };

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
}
