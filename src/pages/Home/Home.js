import React from "react";
import { useNavigate } from "react-router";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";
import { routes } from "../../config/routes";

const Home = () => {
     const navigate = useNavigate();
     return (
          <>
               <div className=" text-[42px] font-montserrat text-center">
                    Welcome to SITRA Motor Management System
               </div>
               <div className=" w-full h-fit flex flex-row justify-center ">
                    <ButtonWithLoadingSpinnerComponent
                         isLoading={false}
                         className="w-[150px] h-[42px] border-4 font-montserrat text-[24px] mt-[1rem]"
                         onClick={() => {
                              navigate("/signin");
                         }}
                    >
                         Go to login
                    </ButtonWithLoadingSpinnerComponent>
               </div>
               <div className=" w-full h-fit flex flex-row justify-center mt-[1rem] ">
                    <ButtonWithLoadingSpinnerComponent
                         isLoading={false}
                         className="w-[300px] h-[42px] border-4 font-montserrat text-[24px] "
                         onClick={() => {
                              navigate(routes?.millaccountcreation);
                         }}
                    >
                         Mill Account Creation
                    </ButtonWithLoadingSpinnerComponent>
               </div>
               <div className=" w-full h-fit flex flex-row justify-center mt-[1rem] ">
                    <ButtonWithLoadingSpinnerComponent
                         isLoading={false}
                         className="w-[150px] h-[42px] border-4 font-montserrat text-[24px] "
                         onClick={() => {
                              navigate(routes?.listmill);
                         }}
                    >
                         List mills
                    </ButtonWithLoadingSpinnerComponent>
               </div>
          </>
     );
};

export default Home;
