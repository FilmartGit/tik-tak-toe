import clsx from "clsx";
import Image from "next/image";
import closeSrc from "./close.png";
import { createPortal } from "react-dom";

/**
 * @param {{ *
 *  width: "md" | "full",
 *  className: string,
 *  isOpen: boolean,
 *  onClose: Function
 * }} props
 */

export function UIModal({
  width = "md",
  className,
  children,
  isOpen = null,
  onClose,
}) {
  const handleClick = (e) => {
    const inModal = e.target.closest("[data-id=modal]");
    if (!inModal) {
      onClose();
    }
  };
  if (!isOpen) {
    return null;
  }
  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur-sm pt-10 overflow-y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] relative flex flex-col",
          {
            md: "max-w-[640px] mx-auto",
            full: "mx-5",
          }[width],
        )}
      >
        <CloseBtn onClose={onClose} />
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById('modals'));
}

UIModal.HEADER = function UIModalHeader({ children, className }) {
  return (
    <div className={clsx("px-6 pt-6 pb-4 text-2xl", className)}>{children}</div>
  );
};
UIModal.BODY = function UIModalBody({ children, className }) {
  return <div className={clsx("px-6", className)}>{children}</div>;
};
UIModal.FOOTER = function UIModalFooter({ children, className }) {
  return (
    <div className={clsx("mt-auto p-6 flex gap-4 justify-end", className)}>
      {children}
    </div>
  );
};

function CloseBtn({ onClose }) {
  return (
    <button
      className="absolute top-0 -right-12 hover:scale-95 transition-all"
      onClick={onClose}
    >
      <Image src={closeSrc} alt="close_modal" width="35" height="35" />
    </button>
  );
}
