/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser, isLoading } = useSelector((state) => state?.auth);
  const { email } = currentUser;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-6">
        waiting.........
      </div>
    );
  }

  if (email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
