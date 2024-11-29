import useSWR from "swr";
import LogInForm from "./components/LogInForm";
import { fetchUser } from "./fetchers";

export default function App() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/login",
    fetchUser
  );

  return data ? (
    <div>{data.email}</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : (
    <LogInForm />
  );
}
