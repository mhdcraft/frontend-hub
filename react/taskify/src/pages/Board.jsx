import BoardHeader from "../features/board/BoardHeader";
import TaskList from "../features/board/task/TaskList";
import AddNewTask from "../features/board/task/AddNewTask";
import { useTask } from "../context/TasksContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useBoard } from "../context/BoardContext";

function Board() {
  const { slug } = useParams();
  const { currentBoard, getBoard } = useBoard();
  const { setBoardId } = useTask();

  useEffect(() => {
    getBoard(slug);
  }, [slug]);

  useEffect(() => {
    if (currentBoard?.id) setBoardId(currentBoard.id);
  }, [setBoardId, currentBoard]);

  return (
    <>
      <BoardHeader />
      <TaskList />
      <AddNewTask />
    </>
  );
}

export default Board;
