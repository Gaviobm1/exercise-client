import { WorkoutCardType } from "../types";
import { getExercises } from "../fetchers";
import useWorkouts from "./useWorkouts";
import useSWR from "swr";

export default function useWorkoutCardData(): WorkoutCardType[] {
  const {
    workouts,
    error: workoutsError,
    isLoading: workoutsLoading,
  } = useWorkouts();

  const endpoints = workouts.map(
    ({ id }) => `${import.meta.env.VITE_EXERCISE_ENDPOINT}/${id}`
  );

  const {
    data: allExercises,
    error: exercisesError,
    isLoading: exercisesLoading,
  } = useSWR(
    () => (endpoints.length ? endpoints : null),
    async (urls) => {
      const responses = await Promise.all(urls.map((url) => getExercises(url)));
      return responses;
    }
  );

  if (workoutsLoading || exercisesLoading) {
    return [];
  }

  if (workoutsError || exercisesError) {
    console.error("Error fetching data:", workoutsError || exercisesError);
    return [];
  }

  return workouts.map((workout, index) => {
    const exercises = allExercises?.[index] || [];
    return {
      workout,
      exercises,
    };
  });
}
