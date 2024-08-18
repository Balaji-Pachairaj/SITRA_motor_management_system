import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";
import { GetAPI } from "../../api_utils/GetAPI";
import { PostAPI } from "../../api_utils/PostAPI";

const unitFetchFunction = async (unitid) => {
     let url = new URL(baseURL + apiendpoints?.indivUnitDetails + "/" + unitid);

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await GetAPI(url, headers);

     return response;
};

const createDepartmentFunction = async (unitid, inputObj) => {
     let url = new URL(baseURL + apiendpoints?.createdepartment);

     let headers = {
          "Content-Type": "application/json",
     };

     let body = {
          unitid,
          department: {
               name: inputObj,
          },
     };

     let response = await PostAPI(url, body, headers);

     return response;
};

const UnitDetailsPage = () => {
     const [unit, setUnit] = useState();

     const { unitid } = useParams();

     const fetchUnitDetails = async () => {
          let unitDetails = await unitFetchFunction(unitid);

          if (unitDetails?.ok) {
               let unitDetailsData = await unitDetails.json();
               setUnit(unitDetailsData);
          }
     };

     useEffect(() => {
          fetchUnitDetails();
     }, []);

     /// local state

     const [showDepartment, setShowDepartment] = useState(false);

     return (
          unit && (
               <>
                    <div className=" h-fit bg-gray-100 py-10 px-5 flex flex-col items-center">
                         <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                              <div className="p-6 border-b border-gray-200">
                                   {/* Unit Information */}
                                   <h1 className="text-3xl font-bold text-gray-800">
                                        {unit.name}
                                   </h1>
                                   <p className="text-lg text-gray-600">
                                        {unit.location}
                                   </p>
                              </div>

                              <div className="p-6">
                                   {/* Mill Information */}
                                   <div className="mb-4 p-4 bg-gray-100 rounded-md">
                                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                             Mill Information
                                        </h2>
                                        <h3 className="text-xl font-bold text-gray-800">
                                             {unit.millid.name}
                                        </h3>
                                        <p className="text-gray-600">
                                             {unit.millid.location}
                                        </p>
                                        <p className="text-md text-gray-500 mt-2">
                                             Status: {unit.millid.status}
                                        </p>
                                   </div>

                                   {/* Departments Information */}
                                   <div className="mb-4">
                                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                             {unit.departments.length}{" "}
                                             Department
                                             {unit.departments.length > 1
                                                  ? "s"
                                                  : ""}
                                        </h2>
                                        {unit.departments.map((department) => (
                                             <div
                                                  key={department._id}
                                                  className="mb-4 p-4 bg-gray-100 rounded-md"
                                             >
                                                  <h3 className="text-xl font-bold text-gray-800">
                                                       {department.name}
                                                  </h3>
                                             </div>
                                        ))}
                                   </div>

                                   {/* No Admins Notice */}
                                   {unit.admins.length === 0 && (
                                        <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-md">
                                             No admins assigned to this unit.
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>

                    <div className=" w-full flex flex-row justify-center gap-[2rem] items-center">
                         {/* <button
                              onClick={() => {}}
                              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                         >
                              Add Admin on this Department
                         </button> */}
                         <button
                              onClick={() => {
                                   setShowDepartment((state) => {
                                        return !state;
                                   });
                              }}
                              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                         >
                              Add Department On this mill
                         </button>
                    </div>

                    {showDepartment && (
                         <CreateDepartmentForm
                              fetchUnitDetails={fetchUnitDetails}
                              unitid={unit._id}
                         />
                    )}
               </>
          )
     );
};

const CreateDepartmentForm = ({ fetchUnitDetails, unitid = "" }) => {
     const [name, setName] = useState("");

     const handleSubmit = async (e) => {
          e.preventDefault();
          if (name.trim()) {
               let response = await createDepartmentFunction(unitid, name);

               if (response?.ok) {
                    fetchUnitDetails();
               }
               setName(""); // Clear the input after submission
          }
     };

     return (
          <div className=" h-fit  py-10 px-5 flex justify-center items-center">
               <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-white shadow-md rounded-lg p-6"
               >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                         Create New Department
                    </h2>

                    <div className="mb-4">
                         <label
                              htmlFor="name"
                              className="block text-gray-700 text-sm font-bold mb-2"
                         >
                              Department Name
                         </label>
                         <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter department name"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              required
                         />
                    </div>

                    <div className="flex items-center justify-between">
                         <button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                         >
                              Create Department
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default UnitDetailsPage;
