import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BoardContext = createContext();

const BASE_URL = "https://json-server-api-yroa.onrender.com";
// const BASE_URL = "http://localhost:3000"; // for local test

const initialState = {
  isLoading: false,
  boards: [],
  currentBoard: null,
  error: null,
};

function boardReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: false,
      };
    case "boards/loaded":
      return {
        ...state,
        isLoading: false,
        boards: action.payload.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };
    case "board/loaded":
      return {
        ...state,
        isLoading: false,
        currentBoard: action.payload[0],
      };
    case "board/created":
      return {
        ...state,
        isLoading: false,
        boards: [action.payload, ...state.boards],
        currentBoard: action.payload,
      };
    case "board/edited":
      return {
        ...state,
        isLoading: false,
        boards: state.boards.map((board) =>
          board.id === action.payload.id ? action.payload : board
        ),
        currentBoard:
          state.currentBoard && state.currentBoard.id === action.payload.id
            ? action.payload
            : state.currentBoard,
      };
    case "board/deleted":
      return {
        ...state,
        isLoading: false,
        boards: state.boards.filter((board) => board.id !== action.payload),
        currentBoard: null,
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function BoardsProvider({ children }) {
  const [{ isLoading, boards, currentBoard }, dispatch] = useReducer(
    boardReducer,
    initialState
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBoards() {
      dispatch({ type: "loading" });
      try {
        const { data } = await axios.get(`${BASE_URL}/boards`);
        dispatch({ type: "boards/loaded", payload: data });
      } catch (error) {
        toast.error(error.message);
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    fetchBoards();
  }, []);

  async function getBoard(slug) {
    if (slug === currentBoard?.slug) return;

    dispatch({ type: "loading" });
    try {
      const { data } = await axios.get(`${BASE_URL}/boards?slug=${slug}`, {
        headers: { "Cashe-Control": "no-cache" },
      });
      dispatch({ type: "board/loaded", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function createBoard(newBoard) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.post(`${BASE_URL}/boards`, newBoard);
      dispatch({ type: "board/created", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function editBoard(id, newBoard) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.patch(`${BASE_URL}/boards/${id}`, newBoard);
      dispatch({ type: "board/edited", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function removeBoard(id) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.get(`${BASE_URL}/tasks?boardId=${id}`);

      await Promise.all(
        data.map((task) => axios.delete(`${BASE_URL}/tasks/${task.id}`))
      );

      await axios.delete(`${BASE_URL}/boards/${id}`);
      toast.success("Board deleted!");
      dispatch({ type: "board/deleted", payload: id });
      navigate("/boards");
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejedted", payload: error.message });
    }
  }

  return (
    <BoardContext.Provider
      value={{
        isLoading,
        boards,
        currentBoard,
        getBoard,
        createBoard,
        editBoard,
        removeBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardsProvider;

export function useBoard() {
  const context = useContext(BoardContext);

  if (context === undefined)
    throw new Error("BoardContext was used outside of BoardsProvider");

  return context;
}
