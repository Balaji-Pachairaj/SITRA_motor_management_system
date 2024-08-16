import React from "react";
import { useSelector } from "react-redux";

const DummyRoute = () => {
     const { auth } = useSelector((state) => {
          return state.master;
     });

     let obj = auth?.obj;
     let mill = obj?.mill;

     return (
          <>
               <div className=" text-[42px] font-montserrat font-[500] ">
                    Welcome, {obj.username}
               </div>
               <div>ID : {obj?._id}</div>

               <div>Roll : {obj?.admin}</div>

               <div className=" text-[32px] font-poppins font-[600]">
                    {mill?.name}
               </div>
               <div className=" text-[24px] font-poppins font-[500]">
                    {mill?.location}
               </div>
          </>
     );
};

export default DummyRoute;
