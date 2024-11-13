import { useTranslations } from "next-intl";
import Link from "next/link";
import { UsersNavigation } from "./components/Navigation/UsersNavigation";
import { Footer } from "./components/Footer/Footer";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <UsersNavigation />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <h2 className="mb-4 text-2xl font-bold dark:text-white">
            {t("title")}
          </h2>
          <p className="mb-8 dark:text-gray-400">
            {t("description")}
          </p>
          <Link
            href="/"
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
} 