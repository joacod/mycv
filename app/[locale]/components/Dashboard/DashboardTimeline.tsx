import { useTranslations } from "next-intl";
import { RiTimelineView } from "react-icons/ri";
import DoneIcon from "../Icons/DoneIcon";
import NotDoneIcon from "../Icons/NotDoneIcon";

interface DashboardTimelineProps {
  items: string[];
  indexOfDone: number;
}

const DashboardTimeline: React.FC<DashboardTimelineProps> = ({
  items,
  indexOfDone,
}) => {
  const t = useTranslations("DashboardTimeline");

  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
          <RiTimelineView className="text-primary h-4 w-4" />
        </div>
        <h2 className="text-xl font-bold">{t("title")}</h2>
      </div>

      <ul className="timeline timeline-vertical">
        {items.map((name, index) => {
          const isDone = index <= indexOfDone;

          const hrBeforeClass =
            index > 0 && index <= indexOfDone ? "bg-primary" : "bg-gray-200";

          const hrAfterClass =
            index < items.length - 1 && index < indexOfDone
              ? "bg-primary"
              : "bg-gray-200";

          return (
            <li key={index}>
              {/* Render hr before, except for the first item */}
              {index > 0 && <hr className={`timeline-line ${hrBeforeClass}`} />}

              {index % 2 === 0 ? (
                <>
                  <div className="timeline-start timeline-box">{name}</div>
                  <div className="timeline-middle">
                    {isDone ? <DoneIcon /> : <NotDoneIcon />}
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-middle">
                    {isDone ? <DoneIcon /> : <NotDoneIcon />}
                  </div>
                  <div className="timeline-end timeline-box">{name}</div>
                </>
              )}

              {/* Render hr after, except for the last item */}
              {index < items.length - 1 && (
                <hr className={`timeline-line ${hrAfterClass}`} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardTimeline;
