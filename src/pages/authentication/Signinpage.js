import React, { useState } from "react";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";
import { PostAPI } from "../../api_utils/PostAPI";
import { useDispatch } from "react-redux";
import { masterSliceActions } from "../../store/MasterSlice/MasterSlice";
import { useNavigate } from "react-router";
import { routes } from "../../config/routes";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";

const signinAuthentication = async (inputObj) => {
     // let url = new URL("");

     let headers = {
          "Content-Type": "application/json",
     };

     let body = inputObj;

     let response = await PostAPI(
          baseURL + apiendpoints?.signin,
          body,
          headers
     );
     let responseData = await response?.json();
     return responseData;
};

const Signinpage = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     // Local state
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     // Submit handlers
     const submitHandler = async (event) => {
          event?.preventDefault();
          let loginAuth = await signinAuthentication({ email, password });

          if (loginAuth?.isAuthenticated) {
               console.log(loginAuth);
               let obj = loginAuth?.user;
               dispatch(masterSliceActions?.updateAuth(obj));
               navigate(routes?.dummy);
          } else {
               console.log(loginAuth);
          }
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
                                   value={email}
                                   onChange={(e) => {
                                        setEmail(e.target.value);
                                   }}
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
                                   type="text"
                                   id="password"
                                   value={password}
                                   onChange={(e) => {
                                        setPassword(e.target.value);
                                   }}
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
