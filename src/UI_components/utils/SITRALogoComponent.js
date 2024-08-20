import React from "react";

import logo from "../../assests/images/Sitra_logo.png";

const SITRALogoComponent = () => {
     return (
          <div className="w-[55px] h-[55px] overflow-hidden">
               <img src={logo} className=" w-full h-full object-contain" />
          </div>
     );
};

export default SITRALogoComponent;
