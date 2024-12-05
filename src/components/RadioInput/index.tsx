import Input from "../Input";
import styles from "./RadioInput.module.css";

export default function RadioInput({
  labels,
  name,
}: {
  labels: string[];
  name: string;
}) {
  return (
    <fieldset className={styles.wrapper}>
      {labels.map((label) => (
        <Input label={label} id={label} name={name} type="radio" />
      ))}
    </fieldset>
  );
}
