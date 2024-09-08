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
            <a
              className="underline"
              href="https://github.com/joacod/mycv"
              target="_blank"
              rel="noopener noreferrer"
              title="My CV on GitHub"
            >
              Web Template
            </a>{" "}
            {t("created")}{" "}
            <a
              className="underline"
              href="https://github.com/joacod"
              target="_blank"
              rel="noopener noreferrer"
              title="Joaquin Diaz on GitHub"
            >
              Joaquin Diaz
            </a>
          </p>
          <span
            className="tooltip tooltip-info ml-2"
            aria-label="Live Long and Prosper! 🖖"
            data-tip="Live Long and Prosper! 🖖"
          >
            <SiStartrek size={20} />
          </span>
        </div>
        <ul>
          <li>
            {t("shots")}{" "}
            <a
              className="underline"
              href="https://shots.so/"
              target="_blank"
              rel="noopener noreferrer"
              title="Shots.so website"
            >
              Shots.so
            </a>
          </li>
          <li>
            {t("uaparser")}{" "}
            <a
              className="underline"
              href="https://uaparser.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="UAParser website"
            >
              uaparser.js.org
            </a>
          </li>
          <li>
            {t("location")}{" "}
            <a
              className="underline"
              href="https://ipapi.co/"
              target="_blank"
              rel="noopener noreferrer"
              title="ipapi website"
            >
              ipapi.co
            </a>
          </li>
          <li>
            {t("flags")}{" "}
            <a
              className="underline"
              href="https://icons8.com/icon/set/flags/color"
              target="_blank"
              rel="noopener noreferrer"
              title="Flags icon set on icons8.com"
            >
              icons8.com
            </a>
          </li>
          <li>
            {t("flaticon")}{" "}
            <a
              className="underline"
              href="https://www.flaticon.com/free-icons/files-and-folders"
              target="_blank"
              rel="noopener noreferrer"
              title="Files and Folders icon on Flaticon by Muhammad Atif"
            >
              Muhammad Atif - Flaticon
            </a>
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
