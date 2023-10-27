"use client";

export const CreditsModal = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const openModal = () => {
    const creditsModal = document.getElementById(
      "credits_modal",
    ) as HTMLDialogElement;
    if (creditsModal) {
      creditsModal.showModal();
    }
  };

  return (
    <>
      <button
        className="btn btn-neutral btn-xs"
        onClick={openModal}
        aria-label="Open Credits Modal"
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
