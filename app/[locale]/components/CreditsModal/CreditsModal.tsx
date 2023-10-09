"use client";

export const CreditsModal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <button
        className="btn btn-neutral btn-xs"
        onClick={() =>
          (
            document.getElementById("credits_modal") as HTMLDialogElement
          )?.showModal()
        }
      >
        {title}
      </button>
      <dialog id="credits_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral text-neutral-content">
          {children}
        </div>
      </dialog>
    </>
  );
};
