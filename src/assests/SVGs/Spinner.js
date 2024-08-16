import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Spinner = () => {
     return (
          <div className=" w-full h-full flex flex-row justify-center items-center">
               <span className=" animate-spin w-min h-min   ">
                    <ImSpinner2 />
               </span>
          </div>
     );
};

export default Spinner;
