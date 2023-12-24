
import { PRIVATE, Route } from "../../constant/routeTypes";
import { Role } from "../../constant/role";
import AdminProfile from "../../pages/admin/adminProfile";
import AdminDashboard from "../../pages/admin/adminDashboard";
import PageNotFound from "../../pages/admin/PageNotFound";
import AdminDoctors from "../../pages/admin/AdminDoctors";

const RoutesData: Route[] = [
  {
    path: "/admin/profile",
    element: <AdminProfile />,
    role: Role.Admin,
    type: PRIVATE,
  },

  {
    path: "/",
    element: <AdminDashboard />,
    role: Role.Admin,
    type: PRIVATE,
  },
  {
    path: "/admin/doctors",
    element: <AdminDoctors />,
    role: Role.Admin,
    type: PRIVATE,
  },
  {
    path: "*",
    element: <PageNotFound />,
    role: Role.Admin,
    type: PRIVATE,
  },
];

export default RoutesData;
