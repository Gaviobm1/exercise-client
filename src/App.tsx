import { workOutArr } from "./data/index.ts";
import Home from "./components/Home";
import WorkoutsProvider from "./components/WorkoutsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/index.tsx";
import LogInForm from "./components/LogInForm/index.tsx";
import RegisterForm from "./components/RegisterForm/index.tsx";
import Layout from "./components/Layout/index.tsx";
import WorkoutDetail from "./components/WorkoutDetail/index.tsx";
import Cookies from "js-cookie";

export default function App() {
  const savedTheme = Cookies.get("color-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  return (
    <WorkoutsProvider workouts={workOutArr}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<LogInForm />} />
              <Route path="register" element={<RegisterForm />} />
            </Route>
            <Route path="user/:userId" element={<Home />} />
            <Route
              path="user/:userId/workout/:workoutId"
              element={<WorkoutDetail />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </WorkoutsProvider>
  );
}
