import React from "react";
import { useSelector } from "react-redux";

const DummyRoute = () => {
     const { auth } = useSelector((state) => {
          return state.master;
     });
     return (
          <>
               <div className=" text-[42px] font-montserrat font-[500] ">
                    Welcome, {auth?.username}
               </div>
               <div>ID : {auth.id}</div>
          </>
     );
};

export default DummyRoute;
