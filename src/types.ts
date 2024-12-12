import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
} from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { LinkProps } from "react-router-dom";

type ExerciseData<T> = {
  id: number;
  name: string;
  notes?: string;
  easy?: boolean;
  workout_id: number;
  type: "strength" | "cardio";
  exerciseData: T;
};

type ExerciseFormFields<T> = {
  name: string;
  notes?: string;
  easy: boolean;
  type: "strength" | "cardio";
  slug: string;
  exerciseData?: T;
};

export type StrengthData = {
  type: "strength";
  reps: number;
  sets: number;
  weight: number;
  multiple_weights: boolean;
};

export type CardioData = {
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
export type ExerciseFormData = ExerciseFormFields<
  StrengthFields | CardioFields
>;

export type DetailBodyProps = {
  exerciseData: StrengthFields | CardioFields;
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
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
  children: React.ReactNode;
  icons: { icon: LucideIcon; link: string }[];
}

export interface DetailHeaderProps {
  children: React.ReactNode;
  Icon: LucideIcon;
}

export interface DetailFieldProps {
  keyStr: string;
  valStr: string;
}

export interface ValueContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  iconProps?: LucideProps;
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export interface AnimatedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  linkProps: LinkProps;
}

export interface WorkoutsProviderProps {
  children: React.ReactNode;
  workouts: WorkoutCardType[];
}

export interface ExerciseProviderProps {
  children: React.ReactNode;
  exercise: ExerciseType;
}

export interface ExercisesContextProps {
  exercises: ExerciseFormData[] | [];
  setExercises: React.Dispatch<SetStateAction<ExerciseFormData[] | []>>;
}

export interface WorkoutProviderProps {
  children: React.ReactNode;
  workout: WorkoutType;
}

export interface GridWrapperProps extends React.AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface ExerciseTabProps {
  children: React.ReactNode;
  type: "strength" | "cardio";
  slug: string;
}

export interface ModalProps {
  children: React.ReactNode;
  btnText?: string;
  type?: string;
  Icon?: LucideIcon;
}

export interface WarningModalProps {
  children: React.ReactNode;
  btnContent: React.ReactNode;
  slug: string;
}
