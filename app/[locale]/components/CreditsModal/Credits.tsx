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
            >
              {tc("my")} CV
            </a>{" "}
            {t("created")}{" "}
            <a
              className="underline"
              href="https://github.com/joacod"
              target="_blank"
            >
              Joaquin Diaz
            </a>
          </p>
          <div
            className="tooltip  tooltip-info ml-2"
            data-tip="Live Long and Prosper! 🖖"
          >
            <SiStartrek size={20} className="" />
          </div>
        </div>
        <ul>
          <li>
            {t("shots")}{" "}
            <a
              className="underline"
              href="https://shots.so/"
              target="_blank"
              title="Shots.so"
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
              title="UAParser"
            >
              uaparser.js.org
            </a>
          </li>
          <li>
            {t("flaticon")}{" "}
            <a
              className="underline"
              href="https://www.flaticon.com/free-icons/files-and-folders"
              target="_blank"
              title="Flaticon"
            >
              Muhammad Atif - Flaticon
            </a>
          </li>
        </ul>
      </div>
      <div className="modal-action flex flex-col items-center">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-primary">{tc("close")}</button>
        </form>
      </div>
    </>
  );
};
