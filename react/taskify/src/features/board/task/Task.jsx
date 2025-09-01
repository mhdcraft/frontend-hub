import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import { RiProgress5Fill } from "react-icons/ri";
import Modal from "../../../ui/Modal";
import ChangeTaskForm from "./ChangeTaskForm";
import { useState } from "react";

const taskStyle = [
  {
    bgColor: "bg-errorLight",
    bgIcon: "bg-error",
    icon: <IoIosClose />,
  },

  {
    bgColor: "bg-warningLight",
    bgIcon: "bg-warning",
    icon: <RiProgress5Fill />,
  },

  {
    bgColor: "bg-successLight",
    bgIcon: "bg-success",
    icon: <IoIosCheckmark />,
  },

  {
    bgColor: "bg-neutral-E3E8EF",
    bgIcon: "",
    icon: "",
  },
];

function Task({ task }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsEditOpen(true)}
        className={`p-0.5 rounded-xl ${
          isEditOpen
            ? "border-2 border-secondary-blue"
            : "border-2 border-transparent"
        }`}
      >
        <div className={`${taskStyle[task.status].bgColor} rounded-xl p-3`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <span className="bg-neutral-white rounded-xl p-2">
                {task.icon}
              </span>
              <h3 className="text-sm font-semibold md:text-lg">{task.name}</h3>
            </div>
            <div
              className={`${
                taskStyle[task.status].bgIcon
              } text-neutral-white rounded-xl p-3`}
            >
              <span className="bg-neutral-white/20 rounded-full block">
                {taskStyle[task.status].icon}
              </span>
            </div>
          </div>
          <div className="text-xs w-4/5 whitespace-pre-wrap md:text-sm ml-14 text-start">
            {task.description}
          </div>
        </div>
      </button>
      <Modal
        title="Task details"
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      >
        <ChangeTaskForm
          taskToEdit={task}
          onClose={() => setIsEditOpen(false)}
        />
      </Modal>
    </>
  );
}

export default Task;
