import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { LucideIcon } from "lucide-react";

export type ExerciseType = {
  id: number;
  name: string;
  type: "strength" | "cardio";
  notes?: string;
  reps?: number;
  sets?: number;
  time?: number;
  distance?: number;
  kcal?: number;
  easy?: boolean;
  weight?: number;
  multiple_weights?: boolean;
  workout_id: number;
};

export type WorkoutType = {
  id: number;
  user_id: number;
  date: Date;
};

export type UserType = {
  id: number;
  first_name: string;
  last_name?: string;
  email: string;
  password: string;
};

export type WorkoutCardType = {
  workout: WorkoutType;
  exercises: ExerciseType[];
};

export type ExerciseDetailType = {
  date: Date;
  exercise: ExerciseType;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  currentSelected?: string;
  options: string[];
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
}

export interface ButtonProps {
  children: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface NavProps {
  href: string;
  text: string;
  slug: string;
  Icon?: LucideIcon;
}

export interface RiseFallProps {
  children: React.ReactNode;
  direction: "rise" | "fall";
}

export interface ExercisePillProps {
  name: string;
  exerciseId: number;
  type: string;
  easy?: boolean;
}
