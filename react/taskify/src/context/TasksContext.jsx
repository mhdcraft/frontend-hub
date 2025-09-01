import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const TaskContext = createContext();

const BASE_URL = "https://json-server-api-yroa.onrender.com";
// const BASE_URL = "http://localhost:3000"; // for local test

const STATUS_PARAMS_MAP = {
  all: null,
  wontdo: 0,
  progress: 1,
  completed: 2,
  todo: 3,
};

const initialState = {
  isLoading: false,
  tasks: [],
  error: null,
};

function taskReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "task/loaded":
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };
    case "task/created":
      return {
        ...state,
        isLoading: false,
        tasks: [action.payload, ...state.tasks],
      };
    case "task/edited":
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "task/deleted":
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
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

function TasksProvider({ children }) {
  const [{ isLoading, tasks }, dispatch] = useReducer(
    taskReducer,
    initialState
  );
  const [boardId, setBoardId] = useState(null);
  const [searchParams] = useSearchParams();
  const statusParams = searchParams.get("status") || "all";

  useEffect(() => {
    async function fetchTasks() {
      dispatch({ type: "loading" });
      try {
        let url = `${BASE_URL}/tasks/?boardId=${boardId}`;

        if (STATUS_PARAMS_MAP[statusParams] !== null) {
          url += `&status=${STATUS_PARAMS_MAP[statusParams]}`;
        }

        const { data } = await axios.get(url);
        dispatch({ type: "task/loaded", payload: data });
      } catch (error) {
        toast.error(error.message);
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    fetchTasks();
  }, [statusParams, boardId]);

  async function createTask(newTask) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.post(`${BASE_URL}/tasks`, newTask);
      dispatch({ type: "task/created", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function editTask(id, newTask) {
    dispatch({ type: "loading" });
    try {
      const { data } = await axios.patch(`${BASE_URL}/tasks/${id}`, newTask);
      dispatch({ type: "task/edited", payload: data });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function removeTask(id) {
    dispatch({ type: "loading" });
    try {
      await axios.delete(`${BASE_URL}/tasks/${id}`);
      toast.success("Task deleted!");
      dispatch({ type: "task/deleted", payload: id });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  return (
    <TaskContext.Provider
      value={{
        isLoading,
        tasks,
        createTask,
        editTask,
        removeTask,
        boardId,
        setBoardId,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TasksProvider;

export function useTask() {
  const context = useContext(TaskContext);

  if (context === undefined)
    throw new Error("TaskContext was used outside of TasksProvider");

  return context;
}
