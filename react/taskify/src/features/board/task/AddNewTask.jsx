import { GoPlus } from "react-icons/go";
import { useTask } from "../../../context/TasksContext";

function AddNewTask() {
  const { createTask, boardId } = useTask();

  const handleClick = () => {
    const newTask = {
      id: Date.now().toString(),
      name: "Task in Progress",
      description: "",
      icon: "⏰",
      status: 1,
      boardId: boardId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    createTask(newTask);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-x-4 bg-secondary-F5E8D5 w-full rounded-xl p-3 mt-4"
    >
      <div className="bg-primary rounded-xl p-3">
        <span className="bg-neutral-white/20 rounded-full block">
          <GoPlus color="white" />
        </span>
      </div>
      <span className="text-sm font-semibold md:text-lg">Add new task</span>
    </button>
  );
}

export default AddNewTask;
