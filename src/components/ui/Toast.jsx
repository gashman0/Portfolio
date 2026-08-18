import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Toast = ({
  type = "success",
  message,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed right-4 top-4 z-[9999] w-[calc(100%-2rem)] max-w-sm">
      <div
        className={`flex items-start gap-3 border bg-[#111] p-4 text-white shadow-2xl ${
          isSuccess ? "border-[#444]" : "border-[#6B0B0C]"
        }`}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center ${
            isSuccess
              ? "bg-white text-black"
              : "bg-[#6B0B0C] text-white"
          }`}
        >
          <FontAwesomeIcon
            icon={isSuccess ? faCheck : faCircleExclamation}
          />
        </div>

        <p className="flex-1 pt-1 text-sm leading-relaxed">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 transition hover:text-white"
          aria-label="Close notification"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default Toast;