import WorkoutCard from "../WorkoutCard";
import GridWrapper from "../GridWrapper";
import useWorkoutsContext from "../../hooks/useWorkoutsContext";

export default function WorkoutGrid() {
  const workoutData = useWorkoutsContext();

  return (
    <GridWrapper>
      {workoutData.length > 0 ? (
        workoutData.map(({ workout, exercises }) => {
          return (
            <WorkoutCard
              workout={workout}
              exercises={exercises}
              key={workout.id}
            />
          );
        })
      ) : (
        <p>no workouts yet</p>
      )}
    </GridWrapper>
  );
}
