import WorkoutCard from "../WorkoutCard";
import GridWrapper from "../GridWrapper";
import useWorkoutsContext from "../../hooks/useWorkoutsContext";

export default function WorkoutGrid() {
  const workoutData = useWorkoutsContext();

  return (
    <GridWrapper>
      {workoutData.map(({ workout, exercises }) => {
        return <WorkoutCard workout={workout} exercises={exercises} />;
      })}
    </GridWrapper>
  );
}
