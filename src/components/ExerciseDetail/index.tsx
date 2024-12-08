import { CardioData, StrengthData } from "../../types";
import styles from "./ExerciseDetail.module.css";
import { HeartPulse, Dumbbell } from "lucide-react";
import DetailHeader from "../DetailHeader";
import DetailBody from "../DetailBody";

export default function ExerciseDetail({
  name,
  exerciseData,
}: {
  name: string;
  exerciseData: StrengthData | CardioData;
}) {
  const { type, ...rest } = exerciseData;
  return (
    <article className={styles.wrapper}>
      <DetailHeader
        Icon={type === "cardio" ? HeartPulse : Dumbbell}
        btnText="edit"
        handleClick={() => console.log("clicked")}
      >
        {name}
      </DetailHeader>
      <DetailBody exerciseData={rest} />
    </article>
  );
}
