import { useAuth } from "./AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth ? ( <Navigate to={"/home"} replace state={{ path: location.pathname }} />
  ) : (
    <Outlet />
  );
};

export default AuthRoute;