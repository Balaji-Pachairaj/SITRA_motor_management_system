import React, { useState } from "react";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";
import { PostAPI } from "../../api_utils/PostAPI";
import { useNavigate } from "react-router";
import { routes } from "../../config/routes";

const millAccountCreation = async (inputObj) => {
     let headers = {
          "Content-Type": "application/json",
     };

     let body = inputObj;

     let response = await PostAPI(
          baseURL + apiendpoints?.createmillaccount,
          body,
          headers
     );
     //  let responseData = await response?.json();
     return response;
};

const MillAccountCreationDummy = () => {
     const navigate = useNavigate();
     // local state
     const [millname, setMillName] = useState("");
     const [location, setLocation] = useState("");
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     // Handlers
     const submitHandler = async () => {
          let obj = {
               mill: {
                    name: millname,
                    location: location,
               },
               user: {
                    username,
                    email,
                    password,
               },
          };

          let response = await millAccountCreation(obj);

          if (response?.ok) {
               console.log(await response.json());
               navigate(routes?.listmill);
          }
     };

     return (
          <div className="bg-gray-100 flex items-center justify-center min-h-screen">
               <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                         Mill Account Setup
                    </h2>

                    {/* Mill Account Section */}
                    <div className="mb-8">
                         <h3 className="text-xl font-semibold mb-4">
                              Mill Account
                         </h3>
                         <div className="mb-4">
                              <label
                                   className="block text-lg font-medium text-gray-700 mb-2"
                                   htmlFor="millName"
                              >
                                   Name
                              </label>
                              <input
                                   type="text"
                                   id="millName"
                                   placeholder="Enter mill name"
                                   value={millname}
                                   onChange={(e) => {
                                        setMillName(e.target.value);
                                   }}
                                   className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                              />
                         </div>

                         <div className="mb-4">
                              <label
                                   className="block text-lg font-medium text-gray-700 mb-2"
                                   htmlFor="millLocation"
                              >
                                   Location
                              </label>
                              <input
                                   type="text"
                                   id="millLocation"
                                   placeholder="Enter mill location"
                                   value={location}
                                   onChange={(e) => {
                                        setLocation(e.target.value);
                                   }}
                                   className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                              />
                         </div>
                    </div>

                    {/* Admin Section */}
                    <div className="mb-8">
                         <h3 className="text-xl font-semibold mb-4">Admin</h3>
                         <div className="mb-4">
                              <label
                                   className="block text-lg font-medium text-gray-700 mb-2"
                                   htmlFor="adminUsername"
                              >
                                   Username
                              </label>
                              <input
                                   type="text"
                                   id="adminUsername"
                                   placeholder="Enter admin username"
                                   value={username}
                                   onChange={(e) => {
                                        setUsername(e.target.value);
                                   }}
                                   className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                              />
                         </div>

                         <div className="mb-4">
                              <label
                                   className="block text-lg font-medium text-gray-700 mb-2"
                                   htmlFor="adminEmail"
                              >
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="adminEmail"
                                   placeholder="Enter admin email"
                                   value={email}
                                   onChange={(e) => {
                                        setEmail(e.target.value);
                                   }}
                                   className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                              />
                         </div>

                         <div className="mb-4">
                              <label
                                   className="block text-lg font-medium text-gray-700 mb-2"
                                   htmlFor="adminPassword"
                              >
                                   Default Password
                              </label>
                              <input
                                   type="text"
                                   id="adminPassword"
                                   placeholder="Enter default password"
                                   value={password}
                                   onChange={(e) => {
                                        setPassword(e.target.value);
                                   }}
                                   className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                              />
                         </div>
                    </div>

                    {/* Submit Button */}
                    <button
                         onClick={submitHandler}
                         className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-bold hover:bg-blue-600"
                    >
                         Inboard mill
                    </button>
               </div>
          </div>
     );
};

export default MillAccountCreationDummy;
