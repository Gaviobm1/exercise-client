import React from "react";
import TextSwitch from "../TextSwitch";
import styles from "./DetailField.module.css";
import { DetailFieldProps } from "../../types";
import { ValueContext } from "../ValueProvider";
import { conversion } from "../../helpers";
import { convertibleFields } from "../../data";

export default function DetailField({ keyStr, valStr }: DetailFieldProps) {
  const { toggle } = React.useContext(ValueContext);
  const [value, setValue] = React.useState(valStr);
  const isConvertible = convertibleFields.includes(keyStr);
  const measurements: [string, string] | null =
    keyStr === "weight"
      ? ["kg", "lb"]
      : keyStr === "distance"
      ? ["km", "mi"]
      : null;

  React.useEffect(() => {
    if (isConvertible) {
      const nextValue = String(conversion(keyStr, toggle, Number(valStr)));
      setValue(nextValue);
    }
  }, [toggle]);

  return (
    <div>
      <div className={styles.headerWrapper}>
        <h4>{keyStr}</h4>
        {measurements && <TextSwitch units={measurements} />}
      </div>
      {value}
    </div>
  );
}
