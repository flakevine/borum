"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formResponse, setFormResponse] = useState("");

  const loginMut = useMutation(
    ["loginUser"],
    () =>
      fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }),
    {
      onSettled: () => {
        queryClient.invalidateQueries(["user"]);
      },
      onSuccess: (res) => {
        console.log(res);
        if (!res.ok) return setFormResponse(res.statusText);
        router.push("/");
      },
    }
  );

  return (
    <div>
      <h1>Login Page</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e: any) => {
          e.preventDefault();
          loginMut.mutate();
        }}
      >
        {formResponse}
        <input
          type="text"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
2;
export default LoginPage;
