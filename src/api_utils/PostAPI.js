export const PostAPI = async (url, body, headers, method = "POST") => {
     // console.log("POST", url, body, headers, method);
     try {
          const response = await fetch(url, {
               method: method,
               body: JSON.stringify(body),
               headers,
          });

          return response;
     } catch (e) {
          return e;
     }
};
