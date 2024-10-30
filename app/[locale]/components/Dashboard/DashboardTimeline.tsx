import DoneIcon from "../Icons/DoneIcon";
import NotDoneIcon from "../Icons/NotDoneIcon";

interface DashboardTimelineProps {
  items: string[];
  indexOfDone: number;
}

const DashboardTimeline: React.FC<DashboardTimelineProps> = ({
  items,
  indexOfDone,
}) => (
  <div className="mt-12">
    <h2 className="mt-5 text-3xl">Timeline</h2>
    <ul className="timeline timeline-vertical mt-10">
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

export default DashboardTimeline;
