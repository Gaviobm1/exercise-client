import ExerciseDetail from "./components/ExerciseDetail";
import { sampleExercises } from "./data";

export default function App() {
  return <ExerciseDetail {...sampleExercises[1]} />;
}
