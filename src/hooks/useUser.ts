import useSWR from "swr";
import { fetchUser } from "../fetchers";

export default function useUser() {
  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_USER_ENDPOINT,
    fetchUser
  );

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
