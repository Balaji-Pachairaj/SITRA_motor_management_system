import React, { useEffect, useState } from "react";
import { GetAPI } from "../../api_utils/GetAPI";
import { apiendpoints, baseURL } from "../../api_utils/API_utlis";
import ButtonWithLoadingSpinnerComponent from "../../UI_components/ButtonWithLoadingSpinnerComponent";
import { useNavigate } from "react-router";
import { routes } from "../../config/routes";

const MillCard = ({ mill }) => {
     const navigate = useNavigate();
     // Function to determine status class
     const getStatusClass = (status) => {
          switch (status) {
               case "inboarding":
                    return "bg-yellow-200 text-yellow-800";
               case "active":
                    return "bg-green-200 text-green-800";
               case "inactive":
                    return "bg-red-200 text-red-800";
               default:
                    return "bg-gray-200 text-gray-800";
          }
     };

     return (
          <div className="max-w-md mx-auto h-fit bg-white shadow-lg rounded-lg overflow-hidden">
               <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                         {mill.millName}
                    </div>
                    <div className="text-gray-700 text-base">
                         <p>
                              <strong>Location:</strong> {mill.millLocation}
                         </p>
                         <p
                              className={`mt-2 px-2 py-1 inline-block rounded-full text-sm font-medium ${getStatusClass(
                                   mill.status
                              )}`}
                         >
                              {mill.status}
                         </p>
                         <ButtonWithLoadingSpinnerComponent
                              onClick={() => {
                                   navigate(
                                        routes?.milldetailsdummy +
                                             "/" +
                                             mill?.millId
                                   );
                              }}
                              className=" ms-[1rem] h-[30px] border-2 ps-1 pe-1 rounded-[8px] font-poppins text-[14px]"
                         >
                              Details
                         </ButtonWithLoadingSpinnerComponent>
                    </div>
               </div>
               <div className="px-6 py-4 border-t border-gray-200">
                    <h3 className="font-bold text-lg mb-2">
                         Admin Information
                    </h3>
                    <p>
                         <strong>Name:</strong> {mill.adminName}
                    </p>
                    <p>
                         <strong>Email:</strong> {mill.adminEmail}
                    </p>
               </div>
          </div>
     );
};

const millListFetch = async () => {
     // let url = new URL("");

     let headers = {
          "Content-Type": "application/json",
     };

     let response = await GetAPI(
          baseURL + apiendpoints?.listmillaccounts,
          headers
     );
     return response;
};

const MillListDummy = () => {
     let [list, setList] = useState([]);

     useEffect(() => {
          let fun = async () => {
               let listMills = await millListFetch();

               if (listMills?.ok) {
                    let responseDate = await listMills?.json();
                    setList(responseDate?.list);
               } else {
                    window.alert("Error");
               }
          };
          fun();
     }, []);

     return (
          <>
               <div className=" w-full text-[48px] font-mono font-[600] text-center">
                    Mill Account Listing
               </div>
               <div className="min-h-screen  flex flex-row justify-start gap-[2rem] flex-wrap mb-[4rem]">
                    {list.map((item) => {
                         if (!item) return <></>;
                         return (
                              <MillCard
                                   mill={{
                                        millId: item?._id,
                                        millName: item?.name,
                                        millLocation: item?.location,
                                        status: item?.status,
                                        adminName: item?.admins[0].username,
                                        adminEmail: item?.admins[0]?.email,
                                   }}
                              />
                         );
                    })}
               </div>
          </>
     );
};

export default MillListDummy;
