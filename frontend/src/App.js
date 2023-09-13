import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./Pages/Courses/Course";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllCourses from "./Pages/AllCourses/AllCourses";
import DashboardData from "./Pages/Dashboard/DashboardData";
import axios from "axios";
import Auth from "./Auth/Auth";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Contactus from "./Pages/Contactus/Contactus";
import Testimonials from "./Pages/Testimonials/Testimonials";
function App() {
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    // Set the default headers for all Axios requests
    axios.defaults.headers.common = {
      ...axios.defaults.headers.common,
      "ngrok-skip-browser-warning": "69420",
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route element={<Dashboard userId={userId} />}>
          <Route path="/dashboard" element={<DashboardData />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/allcourses" element={<AllCourses userId={userId} />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/course/:id" element={<Course />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
