"use client";

import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState<null | { id: number; name: string }>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/me");
      const data = await res.json();
      if (data.user) setUser(data.user);
    };

    fetchUser();
  }, []);

  return user;
}
