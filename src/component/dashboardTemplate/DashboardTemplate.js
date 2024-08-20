import React from "react";
import SideNavBar from "./SideNavBar";
import { Outlet } from "react-router";

const DashboardTemplate = () => {
     return (
          <div className=" w-[100vw] h-[100vh]  flex flex-row ">
               <SideNavBar />
               <div className=" flex-1 bg-[#F0F6FE]">
                    <Outlet />
               </div>
          </div>
     );
};

export default DashboardTemplate;
