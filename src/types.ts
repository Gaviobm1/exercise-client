import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { LucideIcon } from "lucide-react";

type ExerciseData<T> = {
  id: number;
  name: string;
  notes?: string;
  easy?: boolean;
  workout_id: number;
  exerciseData: T;
};

type StrengthData = {
  type: "strength";
  reps: number;
  sets: number;
  weight: number;
  multiple_weights: boolean;
};

type CardioData = {
  type: "cardio";
  time: number;
  distance: number;
  kcal: number;
};

type StrengthFields = {
  reps: number;
  sets: number;
  weight: number;
  multiple_weights: boolean;
};

type CardioFields = {
  time: number;
  distance: number;
  kcal: number;
};

type ValidConversionFields = ("weight" | "distance")[];

export type MeasurementSystemType = {
  fields: ValidConversionFields;
  measurements: [string, string][];
};

export type ExerciseType = ExerciseData<StrengthData | CardioData>;

export type DetailBodyProps = {
  exerciseData: StrengthFields | CardioFields;
  systemValues: MeasurementSystemType;
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
  exercises: ExerciseData<StrengthData | CardioData>[];
};

export type ExerciseDetailType = {
  date: Date;
  exercise: ExerciseData<StrengthData | CardioData>;
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

export interface GridHeaderProps {
  title: string;
  icons: LucideIcon[];
}

export interface DetailHeaderProps {
  children: React.ReactNode;
  Icon: LucideIcon;
  btnText: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface DetailFieldProps {
  keyStr: string;
  valStr: string;
}

export interface ValueContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
