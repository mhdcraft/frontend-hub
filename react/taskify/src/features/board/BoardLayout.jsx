import Header from "../../layout/Header";
import Sidebar from "../board/components/Sidebar";
import { Outlet } from "react-router-dom";

function BoardLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr] bg-secondary-ebebeb">
      <Sidebar />
      <div className="p-4 mt-2">
        <Header />
        <div className=" bg-neutral-white rounded-xl p-4">
          <div className="max-w-screen-sm w-full min-h-screen m-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardLayout;
