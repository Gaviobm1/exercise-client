import Cookies from "js-cookie";
import { ExerciseType } from "../types";
import { convertExerciseFormData } from "../helpers";

export const fetchUser = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  const user = await response.json();
  return user;
};

export const logInRegisterUser = async (
  endpoint: string,
  formData: FormData
) => {
  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    const { token } = await response.json();
    Cookies.set("token", token, { expires: 7 });
    return { success: true };
  } else {
    const { message } = await response.json();
    return { success: false, message };
  }
};

export async function handleSubmitAuth(
  e: React.FormEvent<HTMLFormElement>,
  endpoint: string
) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await logInRegisterUser(endpoint, formData);
  return response;
}

export async function handleWorkoutPost(endpoint: string, date?: Date) {
  const formData = new FormData();
  date && formData.append("date", date.toISOString());
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: formData,
  });
  if (response.ok) {
    const workout = await response.json();
    return workout;
  } else {
    throw new Error("Unable to create workout");
  }
}

export async function handleExercisePost(endpoint: string, data: ExerciseType) {
  const formData = convertExerciseFormData(data);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: formData,
  });
  if (response.ok) {
    return await response.json();
  }
}

export async function getWorkouts(endpoint: string) {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Problem fetching data");
  }
  return await response.json();
}

export async function getExercises(endpoint: string) {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return await response.json();
}

export async function deleteWorkout(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Workout delete failed");
  }
  return await response.json();
}

export async function editWorkout(endpoint: string, formData: FormData) {
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to update workout");
  }
  return await response.json();
}

export async function editExercise(endpoint: string, data: ExerciseType) {
  const formData = convertExerciseFormData(data);
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Exercise delete failed");
  }
  return await response.json();
}

export async function deleteExercise(endpoint: string) {
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Exercise delete failed");
  }
  return await response.json();
}
