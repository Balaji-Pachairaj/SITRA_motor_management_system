import React from "react";
import { useNavigate } from "react-router";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";

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
                         className="w-[150px] h-[42px] border-4 font-montserrat text-[24px] "
                         onClick={() => {
                              navigate("/signin");
                         }}
                    >
                         Go to login
                    </ButtonWithLoadingSpinnerComponent>
               </div>
          </>
     );
};

export default Home;
