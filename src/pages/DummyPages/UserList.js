import React, { useEffect, useState } from "react";
import { GetAPI } from "../../api_utils/GetAPI";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";

const userListFetchFunction = async () => {
     let url = new URL(baseURL + apiendpoints.listUser);

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await GetAPI(url, headers);

     return response;
};

const UsersList = () => {
     const [list, setList] = useState({});

     const fetchUserList = async () => {
          let response = await userListFetchFunction();

          if (response.ok) {
               let data = await response.json();
               setList(data?.list);
          }
     };

     useEffect(() => {
          fetchUserList();
     }, []);
     return (
          list && (
               <div className="h-fit bg-gray-100 py-10 px-5 flex justify-center items-center">
                    <div className="w-full max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
                         <div className="p-6 border-b border-gray-200">
                              <h1 className="text-3xl font-bold text-gray-800 mb-6">
                                   User List
                              </h1>

                              {list.length > 0 ? (
                                   <ul className="space-y-4">
                                        {list.map((user) => (
                                             <li
                                                  key={user._id}
                                                  className="p-4 bg-gray-50 rounded-lg shadow-sm"
                                             >
                                                  <h2 className="text-xl font-semibold text-gray-700">
                                                       {user.username}
                                                  </h2>
                                                  <p className="text-gray-600">
                                                       <strong>Email:</strong>{" "}
                                                       {user.email}
                                                  </p>
                                                  <p className="text-gray-600">
                                                       <strong>
                                                            Admin Type:
                                                       </strong>{" "}
                                                       {user.admin}
                                                  </p>

                                                  <div className="mt-4">
                                                       <h3 className="text-lg font-semibold text-gray-700">
                                                            Mill Information
                                                       </h3>
                                                       <p className="text-gray-600">
                                                            <strong>
                                                                 Mill Name:
                                                            </strong>{" "}
                                                            {user.mill.name}
                                                       </p>
                                                       <p className="text-gray-600">
                                                            <strong>
                                                                 Mill Location:
                                                            </strong>{" "}
                                                            {user.mill.location}
                                                       </p>

                                                       <div className="mt-2">
                                                            <p className="text-gray-600">
                                                                 <strong>
                                                                      Number of
                                                                      Units:
                                                                 </strong>{" "}
                                                                 {
                                                                      user.mill
                                                                           .units
                                                                           .length
                                                                 }
                                                            </p>
                                                            <p className="text-gray-600">
                                                                 <strong>
                                                                      Number of
                                                                      Departments:
                                                                 </strong>{" "}
                                                                 {user.mill
                                                                      .departments
                                                                      ?.length ||
                                                                      0}
                                                            </p>
                                                            <p className="text-gray-600">
                                                                 <strong>
                                                                      Number of
                                                                      Admins:
                                                                 </strong>{" "}
                                                                 {
                                                                      user.mill
                                                                           .admins
                                                                           .length
                                                                 }
                                                            </p>
                                                       </div>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                              ) : (
                                   <p className="text-gray-600">
                                        No users found.
                                   </p>
                              )}
                         </div>
                    </div>
               </div>
          )
     );
};

export default UsersList;
