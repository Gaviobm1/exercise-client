import styles from "./DetailBody.module.css";
import { removeUnderscore, valueToString } from "../../helpers";
import DetailField from "../DetailField";
import ValueProvider from "../ValueProvider";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function DetailBody() {
  const exercise = useExerciseContext();
  const { exercise_data, notes, easy } = exercise;
  const exerciseKeys = Object.keys(exercise_data);
  const exerciseValues = Object.values(exercise_data);

  return (
    <div className={styles.wrapper}>
      {exerciseKeys.map((key, index) => {
        const keyStr = removeUnderscore(key);
        const valStr = valueToString(exerciseValues[index]);
        return (
          <ValueProvider key={keyStr}>
            <DetailField keyStr={keyStr} valStr={valStr} />
          </ValueProvider>
        );
      })}
      {easy && <DetailField keyStr="easy" valStr="yes" />}
      {notes && <DetailField keyStr="notes" valStr={notes} />}
    </div>
  );
}
