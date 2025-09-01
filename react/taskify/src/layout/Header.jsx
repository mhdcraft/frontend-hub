import { useState } from "react";
import StatusFilter from "./StatusFilter";
import { LuMenu } from "react-icons/lu";
import Menu from "../features/board/components/Menu";
import { FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-start justify-between">
      <StatusFilter />
      <button onClick={() => setIsOpen(true)} className=" md:hidden mt-1.5">
        {isOpen ? <FiX size={24} /> : <LuMenu size={24} />}
      </button>
      {isOpen && <Menu onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default Header;
