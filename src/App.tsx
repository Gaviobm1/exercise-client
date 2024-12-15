import { workOutArr } from "./data/index.ts";
import Home from "./components/Home";
import WorkoutsProvider from "./components/WorkoutsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/index.tsx";
import LogInForm from "./components/LogInForm/index.tsx";
import RegisterForm from "./components/RegisterForm/index.tsx";
import Layout from "./components/Layout/index.tsx";
import WorkoutDetail from "./components/WorkoutDetail/index.tsx";
import AddWorkoutWrapper from "./components/AddWorkoutWrapper/index.tsx";

export default function App() {
  return (
    <WorkoutsProvider workouts={workOutArr}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LogInForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/addworkout" element={<AddWorkoutWrapper />} />
              <Route path="/workouts/:id" element={<WorkoutDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </WorkoutsProvider>
  );
}
