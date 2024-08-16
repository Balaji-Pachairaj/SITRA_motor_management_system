import React from "react";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";

const Signinpage = () => {
     const submitHandler = (event) => {
          event?.preventDefault();
     };
     return (
          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
               <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                         SITRA MMS Sign In
                    </h2>
                    <form onSubmit={submitHandler}>
                         <div className="mb-4">
                              <label
                                   className="block text-gray-700 font-medium mb-2"
                                   htmlFor="email"
                              >
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="Enter your email"
                                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                         </div>
                         <div className="mb-6">
                              <label
                                   className="block text-gray-700 font-medium mb-2"
                                   htmlFor="password"
                              >
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   placeholder="Enter your password"
                                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                         </div>
                         <ButtonWithLoadingSpinnerComponent
                              isLoading={false}
                              onClick={submitHandler}
                              className="w-full bg-blue-500 text-white font-medium py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         >
                              Sign In
                         </ButtonWithLoadingSpinnerComponent>
                    </form>
               </div>
          </div>
     );
};

export default Signinpage;
