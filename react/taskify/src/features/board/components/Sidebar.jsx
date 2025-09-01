import AddNewBoard from "../AddNewBoard";
import Boards from "../Boards";

function Sidebar() {
  return (
    <div className="bg-secondary-FFF7ED rounded-tr-3xl rounded-br-3xl hidden md:block">
      <div className="flex items-center justify-center gap-x-2 bg-secondary-F5E8D5 rounded-tr-3xl py-1 mb-8">
        <div>
          <img src="/Logo.svg" alt="Logo" />
        </div>
        <div>
          <p className="text-lg">Taskify</p>
        </div>
      </div>
      <Boards />
      <AddNewBoard />
    </div>
  );
}

export default Sidebar;
