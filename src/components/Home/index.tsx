import GridHeader from "../GridHeader";
import WorkoutGrid from "../WorkoutGrid";
import { Filter, DiamondPlus } from "lucide-react";
import styles from "./Home.module.css";

export default function Home() {
  const icons = [
    {
      icon: Filter,
      link: "/",
    },
    {
      icon: DiamondPlus,
      link: "/addworkout",
    },
  ];
  return (
    <main className={styles.wrapper}>
      <GridHeader icons={icons}>recent workouts</GridHeader>
      <WorkoutGrid />
    </main>
  );
}
