// import { defaultHeaders } from "./APIConfig";

export const GetAPI = async (url, headers, method = "GET") => {
     try {
          const response = await fetch(url, {
               method: method,
               headers: headers,
          });
          return response;
     } catch (e) {
          return e;
     }
};
