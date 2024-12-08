import Home from "./components/Home";
import WorkoutProvider from "./components/WorkoutsProvider";

export default function App() {
  return (
    <WorkoutProvider>
      <Home />
    </WorkoutProvider>
  );
}
