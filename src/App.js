import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home/Home";
import { routes } from "./config/routes";
import Signinpage from "./pages/authentication/Signinpage";
import DummyRoute from "./pages/DummyRoute";

const router = createBrowserRouter([
     {
          path: routes.home,
          element: <Home />,
     },

     // Authentication Routers
     {
          path: routes.signin,
          element: <Signinpage />,
     },

     // Dummy
     {
          path: routes.dummy,
          element: <DummyRoute />,
     },
]);

function App() {
     return (
          <Provider store={store}>
               <RouterProvider router={router} />
          </Provider>
     );
}

export default App;
