import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { routes } from "../../config/routes";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";

const DummyRoute = () => {
     const navigate = useNavigate();
     const { auth } = useSelector((state) => {
          return state.master;
     });

     let obj = auth?.obj;
     let mill = obj?.mill;

     let user = auth?.obj;

     console.log(auth);

     if (!user) {
          return <></>;
     }
     return (
          <>
               <div className="min-h-screen bg-gray-100 py-10 px-5 flex flex-col items-center">
                    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                         <div className="p-6 border-b border-gray-200">
                              {/* User Information */}
                              <h1 className="text-3xl font-bold text-gray-800">
                                   {user.username}
                              </h1>
                              <p className="text-lg text-gray-600">
                                   {user.email}
                              </p>
                              <p className="text-md text-gray-500 mt-2">
                                   Admin Role: {user.admin}
                              </p>
                         </div>
                         <div className="p-6">
                              {/* Mill Information */}
                              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                                   <h3 className="text-xl font-bold text-gray-800">
                                        {user.mill.name}
                                   </h3>
                                   <p className="text-gray-600">
                                        {user.mill.location}
                                   </p>
                              </div>

                              {/* Unit Information */}
                              <div className="mb-4">
                                   <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                        {user.units.length} Unit
                                        {user.units.length > 1 ? "s" : ""}{" "}
                                        Administered
                                   </h2>
                                   {user.units.map((unit) => (
                                        <div
                                             key={unit._id}
                                             className="mb-4 p-4 bg-gray-100 rounded-md"
                                        >
                                             <h3 className="text-xl font-bold text-gray-800">
                                                  {unit.name}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {unit.location}
                                             </p>
                                        </div>
                                   ))}
                              </div>

                              {/* Empty Departments Notice */}
                              {user.departments.length === 0 && (
                                   <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-md">
                                        No departments.
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </>
     );
};

export default DummyRoute;
