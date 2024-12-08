import { ExerciseType, WorkoutCardType, WorkoutType } from "../types";
import { CircleUserRound, DiamondPlus, Filter } from "lucide-react";

export const exerciseTypeOptions = ["strength", "cardio"];
export const convertibleFields = ["weight", "distance"];
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

export const headerData = {
  title: "recent workouts",
  icons: [DiamondPlus, Filter],
};

export const sampleExercises: ExerciseType[] = [
  {
    id: 1,
    name: "Bench Press",
    notes: "Focus on form and slow descent.",
    workout_id: 1,
    exerciseData: {
      type: "strength",
      reps: 10,
      sets: 3,
      weight: 80,
      multiple_weights: false,
    },
  },
  {
    id: 2,
    name: "Running",
    notes: "Maintain a steady pace.",
    easy: true,
    workout_id: 1,
    exerciseData: {
      type: "cardio",
      time: 30,
      distance: 5,
      kcal: 300,
    },
  },
  {
    id: 3,
    name: "Deadlift",
    workout_id: 1,
    exerciseData: {
      type: "strength",
      reps: 5,
      sets: 4,
      weight: 100,
      multiple_weights: false,
    },
  },
  {
    id: 4,
    name: "Cycling",
    easy: false,
    workout_id: 1,
    exerciseData: {
      type: "cardio",
      time: 45,
      distance: 20,
      kcal: 400,
    },
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

const exampleWorkout: WorkoutType = {
  id: 1,
  user_id: 4,
  date: new Date(),
};

const exampleWorkout2: WorkoutType = {
  id: 2,
  user_id: 4,
  date: new Date(),
};

const exampleWorkout3: WorkoutType = {
  id: 3,
  user_id: 4,
  date: new Date(),
};

const exampleWorkout4: WorkoutType = {
  id: 4,
  user_id: 4,
  date: new Date(),
};

export const workoutData: WorkoutCardType = {
  workout: exampleWorkout,
  exercises: sampleExercises,
};

export const workOutArr: WorkoutCardType[] = [
  {
    workout: exampleWorkout,
    exercises: sampleExercises,
  },
  {
    workout: exampleWorkout2,
    exercises: sampleExercises,
  },
  {
    workout: exampleWorkout3,
    exercises: sampleExercises,
  },
  {
    workout: exampleWorkout4,
    exercises: sampleExercises,
  },
];

export const sampleFields: string[] = [
  "12 reps",
  "4 sets",
  "2 x 12.5kg",
  "easy",
];
