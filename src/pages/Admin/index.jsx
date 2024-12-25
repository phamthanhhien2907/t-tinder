import LeftSideBar from "@/components/LeftSideBar";
import Topbar from "@/components/TopBar";
import { Outlet } from "react-router-dom";

const Public = () => {
  return (
    <div className="flex">
      <div className="w-1/4 max-sm:hidden overflow-y-auto h-screen scroll-smooth tabs-list">
        <LeftSideBar />
      </div>
      <div className="w-3/4 max-sm:w-full overflow-y-auto h-screen scroll-smooth ">
        <div className="lg:hidden">
          <Topbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
