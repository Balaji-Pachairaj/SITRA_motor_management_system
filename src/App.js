import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home/Home";
import { routes } from "./config/routes";
import Signinpage from "./pages/authentication/Signinpage";
import DummyRoute from "./pages/DummyPages/DummyRoute";
import MillAccountCreationDummy from "./pages/DummyPages/MillAccountCreationDummy";
import MillListDummy from "./pages/DummyPages/MillListDummy";
import MillDetailsPage from "./pages/DummyPages/MillDetailsPage";
import UnitDetailsPage from "./pages/DummyPages/UnitDetailsPage";
import UsersList from "./pages/DummyPages/UserList";

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
     {
          path: routes?.millaccountcreation,
          element: <MillAccountCreationDummy />,
     },
     {
          path: routes?.listmill,
          element: <MillListDummy />,
     },
     {
          path: routes?.milldetailsdummy + "/:millid",
          element: <MillDetailsPage />,
     },
     {
          path: routes?.unitdetailsdummy + "/:unitid",
          element: <UnitDetailsPage />,
     },
     {
          path: routes?.userList,
          element: <UsersList />,
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
