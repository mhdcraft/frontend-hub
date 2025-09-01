import AddNewBoard from "../AddNewBoard";
import Boards from "../Boards";
import { FiX } from "react-icons/fi";

function Menu({ onClose }) {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 ">
      <div
        onClick={onClose}
        className="fixed left-0 top-0 w-52 min-h-screen bg-secondary-FFF7ED shadow-2xl z-40"
      >
        <div className="flex items-center justify-between gap-x-2 bg-secondary-F5E8D5 py-1 px-2 mb-8">
          <div>
            <img src="/Logo.svg" alt="Logo" />
          </div>
          <div>
            <p className="text-sm">Taskify</p>
          </div>
          <button onClick={onClose} className="hover:text-primary">
            <FiX />
          </button>
        </div>
        <Boards />
        <AddNewBoard />
      </div>
    </div>
  );
}

export default Menu;
