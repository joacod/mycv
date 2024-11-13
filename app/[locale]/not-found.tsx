import { useTranslations } from "next-intl";
import Link from "next/link";
import { UsersNavigation } from "./components/Navigation/UsersNavigation";
import { Footer } from "./components/Footer/Footer";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <UsersNavigation />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-neutral">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-semibold text-error">404</h1>
          <h2 className="mb-4 text-2xl font-bold text-neutral-content">
            {t("title")}
          </h2>
          <p className="mb-8 text-neutral-content/70">
            {t("description")}
          </p>
          <Link
            href="/"
            className="btn btn-primary"
          >
            {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
} 