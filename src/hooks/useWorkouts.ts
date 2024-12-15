import useSWR from "swr";
import { getWorkouts } from "../fetchers";
import { AllWorkoutsQuery } from "../types";

export default function useWorkouts(): AllWorkoutsQuery {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_WORKOUT_ENDPOINT,
    getWorkouts
  );

  return {
    workouts: data || [],
    error: error,
    isLoading,
  };
}
