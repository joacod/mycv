"use client";

import { useUser } from "@clerk/nextjs";

export const DashboardWelcome = () => {
  const { user } = useUser();
  const userName = user ? user.firstName : "";

  return <h2 className="text-3xl font-bold">Welcome {userName}! 👋</h2>;
};
