"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    fetch("http://localhost:8000/users/user", { credentials: "include" })
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  const logout = async () => {
    await fetch("http://localhost:8000/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    router.refresh();
  };

  return (
    <html>
      <head></head>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
          {user ? JSON.stringify(user) : "Loading..."}
        </nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
