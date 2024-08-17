import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";
import { GetAPI } from "../../api_utils/GetAPI";

const unitFetchFunction = async (unitid) => {
     let url = new URL(baseURL + apiendpoints?.indivUnitDetails + "/" + unitid);

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await GetAPI(url, headers);

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

     return (
          unit && (
               <div className="min-h-screen bg-gray-100 py-10 px-5 flex flex-col items-center">
                    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
                         <div className="p-6 border-b border-gray-200">
                              {/* Mill Details */}
                              <h1 className="text-3xl font-bold text-gray-800">
                                   {unit.millid.name}
                              </h1>
                              <p className="text-gray-600">
                                   {unit.millid.location}
                              </p>
                         </div>
                         <div className="p-6">
                              {/* Unit Details */}
                              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                   {unit.name}
                              </h2>
                              <p className="text-gray-600 mb-4">
                                   {unit.location}
                              </p>

                              {/* Admins Section */}
                              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                   Admins
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                   {unit.admins.map((admin) => (
                                        <li
                                             key={admin._id}
                                             className="text-gray-600"
                                        >
                                             <strong>Username:</strong>{" "}
                                             {admin.username} <br />
                                             <strong>Email:</strong>{" "}
                                             {admin.email}
                                        </li>
                                   ))}
                              </ul>

                              {/* Empty Departments Notice */}
                              {unit.departments.length === 0 && (
                                   <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-md">
                                        No departments available.
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          )
     );
};

export default UnitDetailsPage;
