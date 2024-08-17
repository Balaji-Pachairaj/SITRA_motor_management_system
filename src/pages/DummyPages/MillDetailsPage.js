import React, { useEffect, useState } from "react";
import Spinner from "../../assests/SVGs/Spinner";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";
import { GetAPI } from "../../api_utils/GetAPI";
import { useNavigate, useParams } from "react-router";
import { PostAPI } from "../../api_utils/PostAPI";
import { routes } from "../../config/routes";

let fetchIndivMill = async (id) => {
     let url = new URL(baseURL + apiendpoints?.indivMillDetails + "/" + id);

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await GetAPI(url, headers);

     return response;
};

let addadminFunction = async (millid, userObj) => {
     let url = new URL(baseURL + apiendpoints?.addadminonmills);

     let body = {
          millid: millid,
          user: {
               ...userObj,
          },
     };

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await PostAPI(url, body, headers);

     return response;
};

const MillDetailsPage = () => {
     const [mill, setMill] = useState(false);
     const navigate = useNavigate();
     const { millid } = useParams();

     const fun = async () => {
          let reponse = await fetchIndivMill(millid);

          if (reponse?.ok) {
               let mill = await reponse.json();
               console.log(mill);
               setMill(mill);
          }
     };

     useEffect(() => {
          fun();
     }, []);

     // FORMS
     const [showForm, setShowForm] = useState(false);
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const addAdminClickHandler = async () => {
          let response = await addadminFunction(millid, {
               username,
               email,
               password,
          });

          if (response?.ok) {
               fun();
          }
     };

     return mill ? (
          <>
               <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 p-6">
                    <div className="text-center">
                         <h2 className="text-2xl font-bold text-gray-800 mb-4">
                              {mill.name}
                         </h2>
                         <p className="text-gray-600 mb-2">
                              <strong>Location:</strong> {mill.location}
                         </p>
                         <p
                              className={`text-gray-600 mb-6 ${
                                   mill.status === "inactive"
                                        ? "text-red-500"
                                        : mill.status
                                        ? "text-yellow-500"
                                        : "text-green-500"
                              }`}
                         >
                              <strong>Status:</strong> {mill.status}
                         </p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                         <h3 className="text-xl font-semibold text-gray-700 mb-4">
                              Admins
                         </h3>
                         {mill.admins.map((admin) => (
                              <div
                                   key={admin._id}
                                   className="mb-4 p-4 bg-white rounded-lg shadow"
                              >
                                   <p className="text-gray-700">
                                        <strong>Username:</strong>{" "}
                                        {admin.username}
                                   </p>
                                   <p className="text-gray-700">
                                        <strong>Email:</strong> {admin.email}
                                   </p>
                                   <p className="text-gray-700">
                                        <strong>Role:</strong> {admin.admin}
                                   </p>
                              </div>
                         ))}
                    </div>
               </div>
               {/*  */}
               <div className=" w-full flex flex-col items-center">
                    <button
                         onClick={() => {
                              setShowForm((state) => {
                                   return !state;
                              });
                         }}
                         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                         Admin on this Mill
                    </button>
               </div>
               {/*  */}
               {showForm && (
                    <div className=" w-full flex flex-col items-center">
                         <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                                   Admin Details
                              </h3>
                              <form>
                                   <div className="mb-4">
                                        <label
                                             className="block text-gray-700 text-sm font-bold mb-2"
                                             htmlFor="username"
                                        >
                                             Username
                                        </label>
                                        <input
                                             type="text"
                                             id="username"
                                             name="username"
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                             placeholder="Enter username"
                                             value={username}
                                             onChange={(e) => {
                                                  setUsername(e.target.value);
                                             }}
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label
                                             className="block text-gray-700 text-sm font-bold mb-2"
                                             htmlFor="email"
                                        >
                                             Email
                                        </label>
                                        <input
                                             type="email"
                                             id="email"
                                             name="email"
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                             placeholder="Enter email"
                                             value={email}
                                             onChange={(e) => {
                                                  setEmail(e.target.value);
                                             }}
                                        />
                                   </div>
                                   <div className="mb-4">
                                        <label
                                             className="block text-gray-700 text-sm font-bold mb-2"
                                             htmlFor="password"
                                        >
                                             Password
                                        </label>
                                        <input
                                             type="password"
                                             id="password"
                                             name="password"
                                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                             placeholder="Enter password"
                                             value={password}
                                             onChange={(e) => {
                                                  setPassword(e.target.value);
                                             }}
                                        />
                                   </div>
                                   <button
                                        type="submit"
                                        onClick={addAdminClickHandler}
                                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
                                   >
                                        Submit
                                   </button>
                              </form>
                         </div>
                    </div>
               )}

               {/*  */}
               <div className=" w-full h-[50px]"></div>
          </>
     ) : (
          <Spinner />
     );
};

export default MillDetailsPage;
