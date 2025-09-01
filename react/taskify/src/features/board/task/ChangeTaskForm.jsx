import { useState } from "react";
import RadioInputGroup from "../../../ui/RadioInputGroup";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { RiProgress5Fill } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import TextField from "../../../ui/TextField";
import { useTask } from "../../../context/TasksContext";
import Textarea from "../../../ui/Textarea";
import { LuNotebookPen } from "react-icons/lu";

const iconOptions = [
  { label: "👨‍💻", value: "👨‍💻" },
  { label: "💬", value: "💬" },
  { label: "☕️", value: "☕️" },
  { label: "🏋️‍♂️", value: "🏋️‍♂️" },
  { label: "📚", value: "📚" },
  { label: "⏰", value: "⏰" },
];

const statusOptions = [
  { label: "In Progress", value: 1 },
  { label: "Completed", value: 2 },
  { label: "Won't do", value: 0 },
  { label: "To Do", value: 3 },
];

const statusStyle = [
  {
    bgColor: "bg-error",
    icon: <IoIosClose />,
  },

  {
    bgColor: "bg-warning",
    icon: <RiProgress5Fill />,
  },

  {
    bgColor: "bg-success",
    icon: <IoIosCheckmark />,
  },

  {
    bgColor: "bg-neutral-700",
    icon: <LuNotebookPen />,
  },
];

function ChangeTaskForm({ taskToEdit, onClose }) {
  const { editTask, removeTask } = useTask();
  const { name, description, icon, status, id } = taskToEdit;

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newIcon, setNewIon] = useState(icon);
  const [newStatus, setNewStatus] = useState(status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: newName,
      description: newDescription,
      icon: newIcon,
      status: newStatus,
      updatedAt: new Date().toISOString(),
    };
    editTask(id, data);
    onClose();
  };

  const handleDelete = () => {
    removeTask(id);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <TextField
        label="Task name"
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
      <div>
        <p className="lable">Icon</p>
        <RadioInputGroup
          options={iconOptions}
          name="icon"
          onChange={(e) => setNewIon(e.target.value)}
          selected={newIcon}
        />
      </div>
      <div>
        <p className="lable">Status</p>
        <div className="flex items-center flex-wrap gap-3">
          {statusOptions.map(({ label, value }) => (
            <button
              type="button"
              key={value}
              onClick={() => setNewStatus(value)}
              className={`flex items-center justify-between border-2 border-neutral-E3E8EF rounded-xl p-0.5 pr-3 w-full md:max-w-[17rem] ${
                newStatus === value && "border-secondary-blue"
              }`}
            >
              <div className="flex items-center gap-x-3">
                <div
                  className={`${statusStyle[value].bgColor} text-neutral-white rounded-xl p-3`}
                >
                  <span className="bg-neutral-white/20 rounded-full block">
                    {statusStyle[value].icon}
                  </span>
                </div>
                <p className="text-sm">{label}</p>
              </div>
              {newStatus === value && (
                <div className="bg-secondary-blue text-neutral-white rounded-full">
                  <IoIosCheckmark />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
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

export default ChangeTaskForm;
