import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";
import DashboardTimeline from "../../components/Dashboard/DashboardTimeline";
import { DashboardLinks } from "../../components/Dashboard/DashboardLinks";
import { DashboardWelcome } from "../../components/Dashboard/DashboardWelcome";

export default function Dashboard() {
  const t = useTranslations("Dashboard");
  const email = process.env.EMAIL;
  const timelineItems = [
    t("timelineItems.completeHome"),
    t("timelineItems.responsiveMobile"),
    t("timelineItems.intl"),
    t("timelineItems.loginAuth"),
    t("timelineItems.userDashboard"),
    t("timelineItems.moreStuff"),
  ];

  return (
    <section className="text-base-contentt bg-base-300 flex min-h-screen justify-center">
      <div className="px-4 py-14 lg:px-28 lg:py-20">
        <h1 className="text-5xl font-bold">{t("title")}</h1>

        <div className="hero mt-8 rounded-lg bg-black p-8 text-gray-300">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <DashboardWelcome />
              <p className="mt-6 text-pretty">{t("description")}</p>
              <p
                className="mt-1"
                dangerouslySetInnerHTML={{ __html: t.raw("supportMessage") }}
              ></p>
            </div>
          </div>
        </div>

        <DashboardTimeline items={timelineItems} indexOfDone={4} />

        <div className="mt-12">
          <h2 className="mt-5 text-3xl">{t("contactTitle")}</h2>
          <p className="my-4 text-xl">{t("contactDescription")}</p>
          <Link href={`mailto:${email}`} className="btn btn-secondary">
            <FaEnvelope className="mr-2" /> {email}
          </Link>
        </div>

        <DashboardLinks />
      </div>
    </section>
  );
}
