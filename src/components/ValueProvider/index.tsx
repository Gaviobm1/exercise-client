import React from "react";
import { ValueContextType } from "../../types";

export const ValueContext = React.createContext<ValueContextType>({
  toggle: true,
  setToggle: () => {},
});

export default function ValueProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = React.useState(true);

  const context: ValueContextType = { toggle, setToggle };

  return (
    <ValueContext.Provider value={context}>{children}</ValueContext.Provider>
  );
}
