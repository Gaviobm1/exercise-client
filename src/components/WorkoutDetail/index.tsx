import { WorkoutCardType } from "../../types";
import styles from "./WorkoutDetail.module.css";
import { formatToDateTitle } from "../../helpers";

export default function WorkoutDetail({ workout, exercises }: WorkoutCardType) {
  const { date } = workout;
  const dateStr = formatToDateTitle(date);
  return (
    <main>
      <h1>{dateStr}</h1>
    </main>
  );
}
