"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: any) => {
    e.preventDefault();

    await fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    router.refresh();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form className="flex flex-col gap-2" onSubmit={submit}>
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
