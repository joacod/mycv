// Did you like the project?
// Keep the credits, it is a way to thank me for the work done. 🙏
// Thanks! 😃

import { useTranslations } from "next-intl";
import { SiStartrek } from "react-icons/si";

export const Credits = () => {
  const tc = useTranslations("Common");
  const t = useTranslations("Credits");

  return (
    <>
      <div id="modal-content" className="space-y-4">
        <h3 className="mb-5 text-lg font-bold">{t("title")}</h3>
        <div className="flex items-center justify-center">
          <p>
            {t.rich("created", {
              webTemplate: (chunks) => (
                <a
                  className="underline"
                  href="https://github.com/joacod/mycv"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My CV on GitHub"
                >
                  {chunks}
                </a>
              ),
              author: (chunks) => (
                <a
                  className="underline"
                  href="https://github.com/joacod"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Joaquin Diaz on GitHub"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
          <span
            className="tooltip tooltip-info ml-2"
            aria-label={t("tooltip")}
            data-tip={t("tooltip")}
          >
            <SiStartrek size={20} />
          </span>
        </div>
        <ul>
          <li>
            {t.rich("shots", {
              link: (chunks) => (
                <a
                  className="underline"
                  href="https://shots.so/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Shots.so website"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
          <li>
            {t.rich("uaparser", {
              link: (chunks) => (
                <a
                  className="underline"
                  href="https://uaparser.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="UAParser website"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
          <li>
            {t.rich("location", {
              link: (chunks) => (
                <a
                  className="underline"
                  href="https://ipapi.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="ipapi website"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
          <li>
            {t.rich("flags", {
              link: (chunks) => (
                <a
                  className="underline"
                  href="https://icons8.com/icon/set/flags/color"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Flags icon set on icons8.com"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
          <li>
            {t.rich("flaticon", {
              link: (chunks) => (
                <a
                  className="underline"
                  href="https://www.flaticon.com/free-icons/files-and-folders"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Files and Folders icon on Flaticon by Muhammad Atif"
                >
                  {chunks}
                </a>
              ),
            })}
          </li>
        </ul>
      </div>
      <div className="modal-action flex flex-col items-center">
        <form method="dialog">
          <button
            type="submit"
            className="btn btn-primary"
            aria-label="Close Credits Modal"
          >
            {tc("close")}
          </button>
        </form>
      </div>
    </>
  );
};
