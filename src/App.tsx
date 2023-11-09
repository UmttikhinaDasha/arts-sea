
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from './components/pages/ErrorPage';
import MainPage, {loader as artsLoader} from './components/pages/MainPage';
import {UserPage, loader as userLoader} from "./components/pages/UserPage";
import {MessangerPage, loader as msgsLoader} from "./components/pages/MessangerPage";

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    loader: artsLoader,
  },
  {
    path: "users/:userId",
    element: <UserPage />,
    errorElement: <ErrorPage/>,
    loader: userLoader,
  },
  {
    path: "messanger",
    element: <MessangerPage />,
    errorElement: <ErrorPage/>,
    loader: msgsLoader,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;