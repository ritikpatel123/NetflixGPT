import { createHashRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PAGE } from "./routes";
import NotFoundPage from "../components/NotFoundPage";
import Spinner from "../components/Spinner";

import App from "../App";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import Search from "../pages/GptSearch";
import Login from "../components/Login";

import TvShows from "../pages/TvShow";
import Movies from "../pages/Movies";

import NewAndPopular from "../pages/NewAndPopular";

const RouteType = ({ children, type }) => {
  const isLogged = useSelector((store) => store.authenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "private" && !isLogged) {
      navigate(PAGE.SIGNIN);
    } else if (type === "public" && isLogged) {
      navigate(PAGE.BROWSE);
    }
  }, [isLogged, navigate, type]);

  if (isLogged === null) return <Spinner />;

  return <>{children}</>;
};

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <RouteType type="public">
            <Home />
          </RouteType>
        ),
      },
      {
        path: "/browse",
        element: (
          <RouteType type="private">
            <Browse />
          </RouteType>
        ),
      },
      {
        path: "/tv-shows",
        element: (
          <RouteType type="private">
            <TvShows />
          </RouteType>
        ),
      },
      {
        path: "/movies",
        element: (
          <RouteType type="private">
            <Movies />
          </RouteType>
        ),
      },
      {
        path: "/search",
        element: (
          <RouteType type="private">
            <Search />
          </RouteType>
        ),
      },
      {
        path: "/movie-assistant",
        element: (
          <RouteType type="private">
            <Search />
          </RouteType>
        ),
      },
      {
        path: "/login",
        element: (
          <RouteType type="public">
            <Login />
          </RouteType>
        ),
      },
      {
        path: "/new-and-popular",
        element: (
          <RouteType type="private">
            <NewAndPopular />
          </RouteType>
        ),
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
