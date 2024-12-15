import useSWR from "swr";
import { getExercises } from "../fetchers";

export default function useExercises(workoutId: string) {
  const { data, error, isLoading } = useSWR(
    [`${import.meta.env.VITE_EXERCISE_ENDPOINT}/${workoutId}`],
    ([url]) => getExercises(url)
  );

  return {
    exercises: data,
    error,
    isLoading,
  };
}
