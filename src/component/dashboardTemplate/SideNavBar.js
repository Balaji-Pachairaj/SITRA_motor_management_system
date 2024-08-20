import React from "react";
import SITRALogoComponent from "../../UI_components/utils/SITRALogoComponent";
import HomeSVG from "../../assests/SVGs/HomeSVG";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";
import SaveSVG from "../../assests/SVGs/SaveSVG";
import MessageSVG from "../../assests/SVGs/MessageSVG";

const LogoSection = () => {
     return (
          <div className=" w-full h-[70px] flex flex-row justify-center items-center">
               <SITRALogoComponent />
          </div>
     );
};

const SideNavBar = () => {
     return (
          <div className=" w-[100px] bg-mainGradient h-full flex flex-col justify-start">
               <div className=" w-full h-fit flex flex-col gap-[6rem] ">
                    <LogoSection />

                    <div className=" w-full h-fit flex flex-col gap-[1rem]">
                         {/* HOME Nav Links  */}
                         <div className=" w-full h-[60px] flex flex-row justify-center items-center">
                              <ButtonWithLoadingSpinnerComponent className=" w-[45px] h-[45px] bg-[#F4F5FA] flex flex-row justify-center items-center rounded-[12px]">
                                   <HomeSVG />
                              </ButtonWithLoadingSpinnerComponent>
                         </div>
                         {/* Nav links  */}
                         <div className=" w-full h-[60px] flex flex-row justify-center items-center ">
                              <ButtonWithLoadingSpinnerComponent className=" w-[45px] h-[45px]  flex flex-row justify-center items-center rounded-[12px]">
                                   <SaveSVG />
                              </ButtonWithLoadingSpinnerComponent>
                         </div>
                         {/* Nav links  */}
                         <div className=" w-full h-[60px] flex flex-row justify-center items-center">
                              <ButtonWithLoadingSpinnerComponent className=" w-[45px] h-[45px]  flex flex-row justify-center items-center rounded-[12px]">
                                   <MessageSVG />
                              </ButtonWithLoadingSpinnerComponent>
                         </div>
                         {/* Nav links  */}
                         <div className=" w-full h-[60px] flex flex-row justify-center items-center">
                              <ButtonWithLoadingSpinnerComponent className=" w-[45px] h-[45px] flex flex-row justify-center items-center rounded-[12px]">
                                   <MessageSVG />
                              </ButtonWithLoadingSpinnerComponent>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SideNavBar;
