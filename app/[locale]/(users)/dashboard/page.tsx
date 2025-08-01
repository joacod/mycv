import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { DashboardWelcome } from "../../components/Dashboard/DashboardWelcome";
import { GitHubShowcase } from "../../components/Dashboard/DashboardGithub";
import { DevToShowcase } from "../../components/Dashboard/DashboardDevto";
import { LoadingCard } from "../../components/Dashboard/LoadingCard";
import DashboardTimeline from "../../components/Dashboard/DashboardTimeline";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { DashboardLinks } from "../../components/Dashboard/DashboardLinks";

export default function Dashboard() {
  const t = useTranslations("Dashboard");
  const email = process.env.EMAIL;
  const timelineItems = [
    t("timelineItems.completeHome"),
    t("timelineItems.responsiveMobile"),
    t("timelineItems.intl"),
    t("timelineItems.loginAuth"),
    t("timelineItems.userDashboard"),
    t("timelineItems.githubDashboard"),
    t("timelineItems.devtoDashboard"),
    t("timelineItems.moreStuff"),
  ];

  return (
    <section className="text-base-content bg-base-300 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-28 lg:py-20">
        <h1 className="mb-8 text-5xl font-bold">{t("title")}</h1>

        <div className="hero from-primary to-secondary text-primary-content mb-8 rounded-xl bg-gradient-to-r p-8 shadow-lg">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <DashboardWelcome />
              <p className="mt-6 text-pretty opacity-90">{t("description")}</p>
              <p
                className="mt-1 opacity-80"
                dangerouslySetInnerHTML={{ __html: t.raw("supportMessage") }}
              />
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-8">
          <Suspense fallback={<LoadingCard />}>
            <GitHubShowcase />
          </Suspense>
          <Suspense fallback={<LoadingCard />}>
            <DevToShowcase />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DashboardTimeline items={timelineItems} indexOfDone={6} />
          </div>

          <div className="space-y-8">
            <div className="bg-base-100 rounded-xl p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                  <FaEnvelope className="text-primary h-4 w-4" />
                </div>
                <h2 className="text-xl font-bold">{t("contactTitle")}</h2>
              </div>
              <p className="mb-4 opacity-70">{t("contactDescription")}</p>
              <Link href={`mailto:${email}`} className="btn btn-primary">
                <FaEnvelope className="mr-2" /> {email}
              </Link>
            </div>

            <DashboardLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
