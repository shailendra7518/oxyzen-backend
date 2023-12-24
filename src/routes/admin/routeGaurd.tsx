import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Role } from "../../constant/role";


interface RouteGuardProps {
	children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children}) => {
	const user = useSelector((state: RootState) => state.auth.user);

  if (!user ) {
    return <Navigate to={"/auth/login"} />;
  } else if(user && user.role===Role.Admin){
    return children
  } else {
    return 
  }

 
};

export default RouteGuard;
