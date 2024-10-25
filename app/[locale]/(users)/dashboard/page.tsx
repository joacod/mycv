import { devInfo } from "@/utils/devInfo";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";

export default async function Dashboard() {
  const user = await currentUser();
  const email = process.env.EMAIL;

  return (
    <section className="flex min-h-screen bg-neutral text-neutral-content">
      <div className="px-4 py-14 lg:px-28 lg:py-20">
        <h1 className="text-5xl font-bold">Dashboard</h1>
        <h2 className="mt-8 text-3xl">👋 Welcome {user?.firstName}!</h2>
        <p className="mt-4 text-xl">
          🚧 This section is currently under construction. Stay tuned for
          exciting updates! 🚧
        </p>

        <div className="mt-12">
          <h2 className="mt-5 text-3xl">Get in Touch</h2>
          <p className="my-4 text-xl">
            Have questions or suggestions? Feel free to contact me.
          </p>
          <Link href={`mailto:${email}`} className="btn btn-secondary">
            <FaEnvelope className="mr-2" /> {email}
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="mt-5 text-3xl">
            Explore My Projects and Social Media
          </h2>
          <div className="mt-5 flex space-x-12">
            <a
              href={devInfo.githubUrl}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={64} />
            </a>
            <a
              href={devInfo.xUrl}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener"
            >
              <FaXTwitter size={64} />
            </a>
            <a
              href={devInfo.linkedinUrl}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin size={64} />
            </a>
            <a
              href={devInfo.linktree}
              className="delay-50 transition duration-200 ease-in-out hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiLinktreeLogoBold size={64} />
            </a>
          </div>
        </div>

        <p className="mt-12 text-2xl font-bold">
          Thank you for your support! 🖖
        </p>
      </div>
    </section>
  );
}
