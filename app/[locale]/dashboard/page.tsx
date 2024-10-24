import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard() {
  const user = await currentUser();

  return (
    <>
      <h2>Dashboard</h2>
      <p>Welcome {user?.firstName}</p>
    </>
  );
}
