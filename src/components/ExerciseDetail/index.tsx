import { ExerciseType, MeasurementSystemType } from "../../types";
import styles from "./ExerciseDetail.module.css";
import { HeartPulse, Dumbbell } from "lucide-react";
import DetailHeader from "../DetailHeader";
import DetailBody from "../DetailBody";

export default function ExerciseDetail({ name, exerciseData }: ExerciseType) {
  const { type, ...rest } = exerciseData;
  const switchables: MeasurementSystemType =
    type === "strength"
      ? { fields: ["weight"], measurements: [["kg", "lb"]] }
      : { fields: ["distance"], measurements: [["km", "mi"]] };
  return (
    <article className={styles.wrapper}>
      <DetailHeader
        Icon={type === "cardio" ? HeartPulse : Dumbbell}
        btnText="edit"
        handleClick={() => console.log("clicked")}
      >
        {name}
      </DetailHeader>
      <DetailBody exerciseData={rest} systemValues={switchables} />
    </article>
  );
}
