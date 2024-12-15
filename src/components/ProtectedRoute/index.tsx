import { Outlet, Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function ProtectedRoute() {
  const { user, isLoading } = useUser();

  return user ? (
    <Outlet />
  ) : isLoading ? (
    <p>loading...</p>
  ) : (
    <Navigate to="/login" />
  );
}
