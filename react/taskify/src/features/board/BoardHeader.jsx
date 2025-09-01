import { FaPen } from "react-icons/fa";
import Modal from "../../ui/Modal";
import ChangeBoardForm from "./ChangeBoardForm";
import { useState } from "react";
import { useBoard } from "../../context/BoardContext";

function BoardHeader() {
  const [isOpn, setIsOpen] = useState(false);
  const { currentBoard } = useBoard();

  return (
    <div className="mb-8">
      <div className="flex items-center gap-x-3">
        <div>
          <h1 className="font-semibold text-2xl mb-1.5">
            {currentBoard?.name}
          </h1>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="btn hover:text-primary p-1"
          >
            <FaPen size="12" />
          </button>
          <Modal
            title="Board details"
            open={isOpn}
            onClose={() => setIsOpen(false)}
          >
            <ChangeBoardForm onClose={() => setIsOpen(false)} />
          </Modal>
        </div>
      </div>
      <p className="text-xs">{currentBoard?.description}</p>
    </div>
  );
}

export default BoardHeader;
