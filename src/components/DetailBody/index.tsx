import styles from "./DetailBody.module.css";
import { removeUnderscore, valueToString } from "../../helpers";
import DetailField from "../DetailField";
import ValueProvider from "../ValueProvider";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function DetailBody() {
  const exercise = useExerciseContext();
  const { exerciseData } = exercise;
  const keys = Object.keys(exerciseData);
  const values = Object.values(exerciseData);

  return (
    <div className={styles.wrapper}>
      {keys.map((key, index) => {
        const keyStr = removeUnderscore(key);
        const valStr = valueToString(values[index]);
        return (
          <ValueProvider>
            <DetailField keyStr={keyStr} valStr={valStr} />
          </ValueProvider>
        );
      })}
    </div>
  );
}
