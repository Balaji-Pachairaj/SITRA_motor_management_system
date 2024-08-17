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

let addUnitFunction = async (millid, unitObj) => {
     let url = new URL(baseURL + apiendpoints?.addUnitUnderMills);

     let body = {
          millid: millid,
          unit: {
               ...unitObj,
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

     const fetchMillDetails = async () => {
          let reponse = await fetchIndivMill(millid);

          if (reponse?.ok) {
               let mill = await reponse.json();
               console.log(mill);
               setMill(mill);
          }
     };

     useEffect(() => {
          fetchMillDetails();
     }, []);

     // FORMS
     const [showForm, setShowForm] = useState(false);
     const [unitShowForm, setUnitShowForm] = useState(false);

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
               <div className=" w-full flex flex-row justify-center gap-[2rem] items-center">
                    <button
                         onClick={() => {
                              setShowForm((state) => {
                                   return !state;
                              });
                         }}
                         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                         Add Admin on this Mill
                    </button>
                    <button
                         onClick={() => {
                              setUnitShowForm((state) => {
                                   return !state;
                              });
                         }}
                         className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                         Add Unit on this Mill
                    </button>
               </div>
               {/*  */}
               {showForm && (
                    <AddAdminForm
                         fetchMillDetails={fetchMillDetails}
                         millid={millid}
                    />
               )}
               {unitShowForm && (
                    <AddUnitForm
                         fetchMillDetails={fetchMillDetails}
                         millid={millid}
                    />
               )}
               <UnitsList mill={mill} />
               {/*  */}
               <div className=" w-full h-[50px]"></div>
          </>
     ) : (
          <Spinner />
     );
};

const AddUnitForm = ({ fetchMillDetails = () => {}, millid = "" }) => {
     const [name, setName] = useState("");
     const [location, setLocation] = useState("");

     const addAdminClickHandler = async (e) => {
          e.preventDefault();
          let response = await addUnitFunction(millid, {
               name,
               location,
          });

          setName("");
          setLocation("");

          if (response?.ok) {
               fetchMillDetails();
          }
     };
     return (
          <div className=" w-full flex flex-col items-center">
               <div className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                         Unit Details
                    </h3>
                    <form>
                         <div className="mb-4">
                              <label
                                   className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="username"
                              >
                                   Unit Name
                              </label>
                              <input
                                   type="text"
                                   id="unit name"
                                   name="unit name"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   placeholder="Enter unit name"
                                   value={name}
                                   onChange={(e) => {
                                        setName(e.target.value);
                                   }}
                              />
                         </div>
                         <div className="mb-4">
                              <label
                                   className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="email"
                              >
                                   Unit Location
                              </label>
                              <input
                                   type="text"
                                   id="location"
                                   name="location"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   placeholder="Enter location"
                                   value={location}
                                   onChange={(e) => {
                                        setLocation(e.target.value);
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
     );
};

const AddAdminForm = ({ fetchMillDetails = () => {}, millid = "" }) => {
     const [username, setUsername] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const addAdminClickHandler = async (e) => {
          e.preventDefault();
          let response = await addadminFunction(millid, {
               username,
               email,
               password,
          });

          setUsername("");
          setEmail("");
          setPassword("");

          if (response?.ok) {
               fetchMillDetails();
          }
     };
     return (
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
     );
};

export const UnitsList = ({ mill = {} }) => {
     const navigate = useNavigate();
     return (
          <div className=" h-fit py-10 px-5 flex flex-col items-center">
               <h1 className=" text-[28px] font-poppins  text-start w-full ps-8">
                    Units
               </h1>
               <div className="w-full max-w-4xl">
                    {mill?.units.map((unit) => (
                         <div
                              key={unit._id}
                              className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
                         >
                              <div className="p-6">
                                   <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                        {unit.name}
                                   </h2>
                                   <p className="text-gray-600 mb-4">
                                        {unit.location}
                                   </p>
                                   <p className="text-gray-500">
                                        Mill Admin Name:{" "}
                                        {mill?.admins[0]?.username}
                                   </p>
                                   <div className="mt-4 flex justify-between">
                                        <div>
                                             <p className="text-sm text-gray-500">
                                                  Admins: {unit.admins.length}
                                             </p>
                                             <p className="text-sm text-gray-500">
                                                  Departments:{" "}
                                                  {unit.departments.length}
                                             </p>
                                        </div>
                                        <button
                                             onClick={() => {
                                                  navigate(
                                                       routes?.unitdetailsdummy +
                                                            "/" +
                                                            unit?._id
                                                  );
                                             }}
                                             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                        >
                                             View Details
                                        </button>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default MillDetailsPage;
