import styles from "./ExerciseDetail.module.css";
import { HeartPulse, Dumbbell } from "lucide-react";
import DetailHeader from "../DetailHeader";
import DetailBody from "../DetailBody";
import useExerciseContext from "../../hooks/useExerciseContext";

export default function ExerciseDetail() {
  const exercise = useExerciseContext();
  const { name, exerciseData } = exercise;
  const { type } = exerciseData;
  return (
    <article className={styles.wrapper}>
      <DetailHeader Icon={type === "cardio" ? HeartPulse : Dumbbell}>
        {name}
      </DetailHeader>
      <DetailBody />
    </article>
  );
}
