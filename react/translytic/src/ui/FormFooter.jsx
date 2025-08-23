import { FaVolumeUp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

function FormFooter({ children, onCopy, onSpeak, query }) {
  return (
    <div className=" py-4 text-xs md:text-sm">
      <div className="flex items-end justify-between min-h-[60px]">
        <div className="flex items-center gap-x-1.5">
          {query && (
            <button onClick={onSpeak} className="btn btn--secondary">
              <FaVolumeUp />
            </button>
          )}
          {query && (
            <button onClick={onCopy} className="btn btn--secondary">
              <FiCopy />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-y-1.5">{children}</div>
      </div>
    </div>
  );
}

export default FormFooter;
