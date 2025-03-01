import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = useContext(AuthContext);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
