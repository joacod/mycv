import { WritingContent } from "./WritingContent";
import { WritingTopArticles } from "./WritingTopArticles";

export function Writing() {
  return (
    <section
      id="section-writing"
      className="bg-primary text-primary-content flex items-center pt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-7 lg:gap-16">
          <WritingContent />
          <WritingTopArticles />
        </div>
      </div>
    </section>
  );
}
