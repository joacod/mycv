import { useTranslations } from "next-intl";
import Link from "next/link";
import Navigation from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <>
      <Navigation variant="other" />
      <main className="bg-neutral flex min-h-screen flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-error mb-4 text-6xl font-semibold">404</h1>
          <h2 className="text-neutral-content mb-4 text-2xl font-bold">
            {t("title")}
          </h2>
          <p className="text-neutral-content/70 mb-8">{t("description")}</p>
          <Link href="/" className="btn btn-primary">
            {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
