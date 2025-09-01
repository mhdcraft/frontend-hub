import { useNavigate } from "react-router-dom";
import { useBoard } from "../../context/BoardContext";
import { useEffect } from "react";
import Message from "../../ui/Message";
import Loading from "../../ui/Loading";

function BoardsRedirect() {
  const navigate = useNavigate();
  const { boards } = useBoard();

  useEffect(() => {
    if (boards.length) {
      const lastBoard = boards[0];

      navigate(`/boards/${lastBoard?.slug}`, { replace: true });
    }
  }, [boards, navigate]);

  if (!boards.length) return <Message>No Boards yet. Create one!</Message>;

  return <Loading>Transferring...</Loading>;
}

export default BoardsRedirect;
