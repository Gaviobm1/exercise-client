import Cookies from "js-cookie";
import { ExerciseType } from "../types";
import { CircleUserRound } from "lucide-react";

export const fetchUser = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return await response.json();
};

export const exerciseTypeOptions = ["strength", "cardio"];
export const easyOptions = [true, false];
export const navLinks = [
  {
    href: "/",
    text: "search",
    slug: "searchlink",
  },
  {
    href: "/",
    text: "all workouts",
    slug: "workoutslink",
  },
  {
    href: "/",
    text: "account",
    slug: "accountlink",
    Icon: CircleUserRound,
  },
];

export const sampleExercises: ExerciseType[] = [
  {
    id: 1,
    name: "Bench Press",
    type: "strength",
    notes: "Focus on form and slow descent.",
    reps: 10,
    sets: 3,
    weight: 80,
    multiple_weights: false,
    workout_id: 101,
  },
  {
    id: 2,
    name: "Running",
    type: "cardio",
    notes: "Maintain a steady pace.",
    time: 30, // in minutes
    distance: 5, // in kilometers
    kcal: 300,
    easy: true,
    workout_id: 102,
  },
  {
    id: 3,
    name: "Deadlift",
    type: "strength",
    reps: 5,
    sets: 4,
    weight: 100,
    multiple_weights: false,
    workout_id: 101,
  },
  {
    id: 4,
    name: "Cycling",
    type: "cardio",
    time: 45, // in minutes
    distance: 20, // in kilometers
    kcal: 400,
    easy: false,
    workout_id: 103,
  },
];

export const sampleExerciseDetails = [
  {
    date: new Date("2024-12-01"),
    exercise: sampleExercises[0],
  },
  {
    date: new Date("2024-12-01"),
    exercise: sampleExercises[1],
  },
  {
    date: new Date("2024-12-02"),
    exercise: sampleExercises[2],
  },
  {
    date: new Date("2024-12-02"),
    exercise: sampleExercises[3],
  },
];
