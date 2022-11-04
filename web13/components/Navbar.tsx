import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface NavbarProps {}

export default function Navbar() {
  const queryClient = useQueryClient();

  const logoutMut = useMutation(
    ["logoutUser"],
    () =>
      fetch("http://localhost:8000/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }),
    {
      onSettled: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
    }
  );

  const userQuery = useQuery(["user"], () =>
    fetch("http://localhost:8000/users/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res) => res.json())
  );
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <button onClick={() => logoutMut.mutate()}>Logout</button>
        </li>
      </ul>
      {userQuery.isLoading
        ? "Loading..."
        : userQuery.error
        ? JSON.stringify(userQuery.error)
        : userQuery.data.detail
        ? userQuery.data.detail
        : "Logged as " + userQuery.data.name}
    </nav>
  );
}
