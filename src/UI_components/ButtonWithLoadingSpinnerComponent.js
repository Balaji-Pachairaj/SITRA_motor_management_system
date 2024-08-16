import React from "react";
import Spinner from "../assests/SVGs/Spinner";

const ButtonWithLoadingSpinnerComponent = ({
     className = "",
     children,
     onClick = () => {},
     isLoading = false,
}) => {
     return (
          <button onClick={onClick} className={className}>
               {!isLoading ? children : <Spinner />}
          </button>
     );
};

export default ButtonWithLoadingSpinnerComponent;
