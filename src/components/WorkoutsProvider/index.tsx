import React from "react";
import { workOutArr } from "../../data";

export const WorkoutContext = React.createContext(workOutArr);

export default function WorkoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WorkoutContext.Provider value={workOutArr}>
      {children}
    </WorkoutContext.Provider>
  );
}
