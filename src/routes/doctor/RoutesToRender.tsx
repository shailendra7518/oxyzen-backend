import { Routes, Route } from "react-router-dom";
import RouteGuard from "./routeGaurd";
import RoutesData from "./RouteData";
const RoutesToRender = () => {
  return (
    <Routes>
      {RoutesData.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<RouteGuard children={route.element} type={route.type} />}
        />
      ))}
    </Routes>
  );
};

export default RoutesToRender;
