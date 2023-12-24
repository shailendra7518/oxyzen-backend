import { useSelector } from "react-redux";
import Footer from "./components/common/Footer";
import Header from "./components/patient/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "./redux/store";
import { Role } from "./constant/role";
import AdminRoutesToRender from './routes/admin/RoutesToRender'
import DoctorRoutesToRender from './routes/doctor/RoutesToRender'
import PatientRoutesToRender from "./routes/patient/RoutesToRender";
import AdminHeader from "./components/admin/HeaderAdmin";
function App() {
	const user = useSelector((state: RootState) => state.auth.user)
	
    
	if (user?.role === Role.Admin) {
	return	<div className="font-rubik">
      <AdminHeader/>
      <AdminRoutesToRender />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>;
	} else if (user?.role === Role.Doctor) {

	return	<div className="font-rubik">
      <Header />
      <DoctorRoutesToRender />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>;
	} else {
		
		return <div className="font-rubik">
      <Header />
      <PatientRoutesToRender />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>;
	}
}

export default App;
