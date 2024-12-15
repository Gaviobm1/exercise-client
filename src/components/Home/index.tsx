import GridHeader from "../GridHeader";
import WorkoutGrid from "../WorkoutGrid";
import { Filter, DiamondPlus } from "lucide-react";
import styles from "./Home.module.css";
import { v4 as uuidV4 } from "uuid";

export default function Home() {
  const icons = [
    {
      icon: Filter,
      link: "/",
      slug: uuidV4(),
    },
    {
      icon: DiamondPlus,
      link: "/addworkout",
      slug: uuidV4(),
    },
  ];
  return (
    <main className={styles.wrapper}>
      <GridHeader icons={icons}>recent workouts</GridHeader>
      <WorkoutGrid />
    </main>
  );
}
