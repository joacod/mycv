import { getTranslations } from "next-intl/server";
import { WritingContent } from "./WritingContent";
import { WritingTopArticles } from "./WritingTopArticles";

export async function Writing() {
  const t = await getTranslations("Writing");

  return (
    <section
      id="section-writing"
      className="bg-primary text-primary-content flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-7 lg:gap-16">
          <WritingContent
            title={t("title")}
            description={t("description")}
            platformDevTo={t("platformDevTo")}
            platformMedium={t("platformMedium")}
          />
          <WritingTopArticles />
        </div>
      </div>
    </section>
  );
}
