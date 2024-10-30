import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import DashboardTimeline from "../../components/Dashboard/DashboardTimeline";
import { DashboardLinks } from "../../components/Dashboard/DashboardLinks";

export default async function Dashboard() {
  const user = await currentUser();
  const email = process.env.EMAIL;
  const timelineItems = [
    "Complete Home page sections",
    "Responsive Mobile version",
    "Login Auth configurations",
    "Dashboard page (Login needed)",
    "Microfrontends page (Login needed)",
    "More stuff (stay tuned)",
  ];

  return (
    <section className="text-base-contentt flex min-h-screen justify-center bg-base-300">
      <div className="px-4 py-14 lg:px-28 lg:py-20">
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <div className="hero mt-8 rounded-lg bg-black p-8 text-gray-300">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">
                Welcome {user?.firstName}! 👋
              </h2>
              <p className="mt-6 text-pretty">
                Explore exclusive members-only content! Dive into what I’m
                currently working on, and check out the timeline for upcoming
                features and projects available just for you.
              </p>
              <p className="mt-1">
                Stay tuned for updates, and{" "}
                <span className="font-bold">thank you</span> for your support!
              </p>
            </div>
          </div>
        </div>

        <DashboardTimeline items={timelineItems} indexOfDone={3} />

        <div className="mt-12">
          <h2 className="mt-5 text-3xl">Get in Touch</h2>
          <p className="my-4 text-xl">
            Have questions or suggestions? Feel free to contact me.
          </p>
          <Link href={`mailto:${email}`} className="btn btn-secondary">
            <FaEnvelope className="mr-2" /> {email}
          </Link>
        </div>

        <DashboardLinks />
      </div>
    </section>
  );
}
