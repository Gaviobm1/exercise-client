import styles from "./ExerciseDetail.module.css";
import { HeartPulse, Dumbbell } from "lucide-react";
import DetailHeader from "../DetailHeader";
import DetailBody from "../DetailBody";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function ExerciseDetail() {
  const exercise = useExerciseContext();
  const { name, exercise_data } = exercise;
  const { type } = exercise_data;
  return (
    <article className={styles.wrapper}>
      <DetailHeader Icon={type === "cardio" ? HeartPulse : Dumbbell}>
        {name}
      </DetailHeader>
      <DetailBody />
    </article>
  );
}
