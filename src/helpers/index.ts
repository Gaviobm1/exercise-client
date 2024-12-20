import { format } from "date-fns";
import Cookies from "js-cookie";
import { ExerciseType, WorkoutCardType } from "../types";

export const formatToDateTitle = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export const formateToInputValue = (date: Date) => {
  return format(date, "yyyy/MM/dd");
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
  const { type } = exercise.exercise_data;
  switch (type) {
    case "strength":
      const { sets, reps, weight, multiple_weights } = exercise.exercise_data;
      return { sets, reps, weight, multiple_weights };
      break;
    case "cardio":
      const { time, distance, kcal } = exercise.exercise_data;
      return { time, distance, kcal };
      break;
  }
};

export function convertExerciseFormData(data: ExerciseType) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("type", data.type);
  formData.append("workoutId", String(data.workoutId));
  formData.append("exercise_data", JSON.stringify(data.exercise_data));
  data.notes && formData.append("notes", data.notes);
  data.easy && formData.append("easy", String(data.easy));

  return formData;
}
