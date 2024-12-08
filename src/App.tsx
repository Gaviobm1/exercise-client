import Home from "./components/Home";
import WorkoutProvider from "./components/WorkoutsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/index.tsx";
import LogInForm from "./components/LogInForm/index.tsx";
import RegisterForm from "./components/RegisterForm/index.tsx";
import Layout from "./components/Layout/index.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<LogInForm />} />
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route path="user" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
