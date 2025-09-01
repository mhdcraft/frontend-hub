import { IoIosClose } from "react-icons/io";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className=" fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 xl:left-[70%] -translate-x-1/2 -translate-y-1/2  rounded-lg bg-white p-6 shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-screen-sm max-h-[calc(100vh-2rem)] overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-sm">{title}</p>
            <button
              onClick={onClose}
              className="border-2 border-neutral-E3E8EF text-primary duration-300 hover:border-primary rounded-lg p-2"
            >
              <span className="bg-primary/20 block rounded-full">
                <IoIosClose />
              </span>
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
