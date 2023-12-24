import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PRIVATE, PUBLIC } from "../../constant/routeTypes";


interface RouteGuardProps {
  children: ReactNode;
  type: string;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children,type}) => {
	const user = useSelector((state: RootState) => state.auth.user);

  if (type === PUBLIC) {
    return children;
 
  } else if(type===PRIVATE && user){
    return children 
  } else {
       return <Navigate to={"/auth/login"} />;
  }

 
};

export default RouteGuard;
