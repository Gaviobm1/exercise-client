import GridHeader from "../GridHeader";
import WorkoutGrid from "../WorkoutGrid";
import { Filter, DiamondPlus } from "lucide-react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <GridHeader icons={[Filter, DiamondPlus]}>recent workouts</GridHeader>
      <WorkoutGrid />
    </main>
  );
}
