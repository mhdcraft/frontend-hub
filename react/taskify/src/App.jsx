import BoardLayout from "./features/board/BoardLayout";
import TasksProvider from "./context/TasksContext";
import { Toaster } from "react-hot-toast";
import BoardsProvider from "./context/BoardContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import BoardsRedirect from "./features/board/BoardsRedirect";

function App() {
  return (
    <BoardsProvider>
      <TasksProvider>
        <Toaster />
        <Routes>
          <Route path="/boards" element={<BoardLayout />}>
            <Route index element={<BoardsRedirect />} />
            <Route path="/boards/:slug" element={<Board />} />
          </Route>
          <Route path="/" element={<Navigate to="/boards" replace />} />
        </Routes>
      </TasksProvider>
    </BoardsProvider>
  );
}

export default App;
