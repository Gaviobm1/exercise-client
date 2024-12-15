import { format } from "date-fns";
import Cookies from "js-cookie";
import { ExerciseType, WorkoutCardType } from "../types";

export const formatToDateTitle = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export const setBearerToken = (token: string, expiration: number = 7) => {
  Cookies.set("Authorization", `Bearer ${token}`, { expires: expiration });
};

export const getBearerToken = () => {
  return Cookies.get("Authorization");
};

export const removeUnderscore = (str: string) => {
  if (str.includes("_")) {
    const arr: string[] = [];
    for (const char of str) {
      if (char !== "_") {
        arr.push(char);
        continue;
      }
      arr.push(" ");
    }
    return arr.join("");
  }
  return str;
};

export const valueToString = (val: string | number | boolean): string => {
  if (typeof val === "boolean") {
    if (val) {
      return "yes";
    } else {
      return "no";
    }
  }
  return String(val);
};

export const weightConvert = (weight: number) => {
  return weight * 2.205;
};

export const distanceConvert = (distance: number) => {
  return distance / 1.609;
};

export const conversion = (type: string, current: boolean, value: number) => {
  if (type === "weight") {
    if (current) {
      return value;
    } else {
      return weightConvert(value)?.toFixed(2);
    }
  }
  if (type === "distance") {
    if (current) {
      return value;
    } else {
      return distanceConvert(value)?.toFixed(2);
    }
  }
};

export const getWorkout = (
  workouts: WorkoutCardType[],
  id: number
): WorkoutCardType => {
  const workout = workouts.find(({ workout }) => workout.id === id);
  if (workout) {
    return workout;
  } else {
    throw new Error("Workout not found");
  }
};

export const getExerciseFields = (exercise: ExerciseType) => {
  const { type } = exercise.exerciseData;
  switch (type) {
    case "strength":
      const { sets, reps, weight, multiple_weights } = exercise.exerciseData;
      return { sets, reps, weight, multiple_weights };
      break;
    case "cardio":
      const { time, distance, kcal } = exercise.exerciseData;
      return { time, distance, kcal };
      break;
  }
};

export function convertExerciseFormData(data: ExerciseType) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("type", data.type);
  formData.append("workout_id", String(data.workoutId));
  data.notes && formData.append("notes", data.notes);
  data.easy && formData.append("easy", String(data.easy));

  if (data.exerciseData.type === "cardio") {
    formData.append("time", String(data.exerciseData.time));
    formData.append("distance", String(data.exerciseData.distance));
    formData.append("kcal", String(data.exerciseData.distance));
    formData.append("type", String(data.exerciseData.type));
  }
  if (data.exerciseData.type === "strength") {
    formData.append("sets", String(data.exerciseData.sets));
    formData.append("reps", String(data.exerciseData.reps));
    formData.append("weight", String(data.exerciseData.weight));
    formData.append("type", String(data.exerciseData.multiple_weights));
    formData.append("type", String(data.exerciseData.type));
  }

  return formData;
}
