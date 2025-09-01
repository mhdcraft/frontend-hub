import { useTask } from "../../../context/TasksContext";
import Loading from "../../../ui/Loading";
import Message from "../../../ui/Message";
import Task from "./Task";

function TaskList() {
  const { isLoading, tasks } = useTask();

  if (!tasks.length) return <Message>No Tasks yet. Create one!</Message>;
  if (isLoading) return <Loading>Loading...</Loading>;

  return (
    <div className="flex flex-col gap-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
