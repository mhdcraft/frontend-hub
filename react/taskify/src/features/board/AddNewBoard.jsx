import { useNavigate } from "react-router-dom";
import { useBoard } from "../../context/BoardContext";

function AddNewBoard() {
  const navigate = useNavigate();
  const { createBoard } = useBoard();

  const handleClick = () => {
    const tempSlug = `new-board-${Date.now()}`;

    const newBoard = {
      id: Date.now().toString(),
      name: "New Board",
      description: "Tasks to keep organised",
      slug: tempSlug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    navigate(`/boards/${tempSlug}`);
    createBoard(newBoard);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-xs md:text-sm font-semibold border-2 border-primary/30 hover:border-primary py-3 rounded-tr-3xl rounded-br-3xl mt-8 duration-300"
    >
      AddNewBoard
    </button>
  );
}

export default AddNewBoard;
