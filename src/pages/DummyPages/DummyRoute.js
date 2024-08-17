import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { routes } from "../../config/routes";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";

const DummyRoute = () => {
     const navigate = useNavigate();
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

               <ButtonWithLoadingSpinnerComponent
                    onClick={() => {
                         navigate(routes?.milldetailsdummy + "/" + mill?._id);
                    }}
                    className=" ms-[1rem] h-[30px] border-2 ps-1 pe-1 rounded-[8px] font-poppins text-[14px]"
               >
                    Mill Details
               </ButtonWithLoadingSpinnerComponent>
          </>
     );
};

export default DummyRoute;
