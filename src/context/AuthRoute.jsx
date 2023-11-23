import { useAuth } from "./AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // checks if user is already authenticated, if so, redirects to home page
  return auth ? ( <Navigate to={"/home"} replace state={{ path: location.pathname }} />
  ) : (
    <Outlet />
  );
};

const NotAuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // checks if user is already authenticated, if not, redirects to home page
  return auth ? (
    <Outlet />
    ) : (
      <Navigate to={"/home"} replace state={{ path: location.pathname }} />
  );
}

// export default AuthRoute;
export { NotAuthRoute, AuthRoute };