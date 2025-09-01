import { useState } from "react";
import Textarea from "../../ui/Textarea";
import TextField from "../../ui/TextField";
import { useBoard } from "../../context/BoardContext";
import { IoIosCheckmark } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { makeUniqueSlug } from "../../utils/makeUniqueSlug";

function ChangeBoardForm({ onClose }) {
  const [searchParams] = useSearchParams();
  const statusParams = searchParams.get("status") || "all";

  const navigate = useNavigate();

  const { boards, currentBoard, editBoard, removeBoard } = useBoard();
  const id = currentBoard?.id;
  const name = currentBoard?.name;
  const description = currentBoard?.description;

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSlug = makeUniqueSlug(newName, boards, id);

    const newBoard = {
      name: newName,
      slug: newSlug,
      description: newDescription,
      updatedAt: new Date().toISOString(),
    };

    editBoard(id, newBoard);
    onClose();

    navigate(`/boards/${newSlug}?status=${statusParams}`, { replace: true });
  };

  const handleDelete = () => {
    removeBoard(id);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <TextField
        label="Board name"
        name="name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Textarea
        label="Description"
        name="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <div className="flex items-center justify-center md:justify-end gap-x-4 mt-20">
        <button
          onClick={handleDelete}
          type="button"
          className="btn btn--secondary"
        >
          Delete
          <span>
            <FiTrash2 />
          </span>
        </button>
        <button disabled={!newName} type="submit" className="btn btn--primary">
          Save
          <span>
            <IoIosCheckmark size={24} />
          </span>
        </button>
      </div>
    </form>
  );
}

export default ChangeBoardForm;
