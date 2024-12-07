import React from "react";
import Switch from "../Switch";
import { ValueContext } from "../ValueProvider";

export default function TextSwitch({ units }: { units: [string, string] }) {
  const { toggle, setToggle } = React.useContext(ValueContext);

  return (
    <Switch toggle={toggle} setToggle={setToggle}>
      <span>{toggle ? units[0] : units[1]}</span>
    </Switch>
  );
}
