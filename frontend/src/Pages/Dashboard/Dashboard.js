import React from "react";
import "./Dashboard.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Pic1 from "../../Assets/c-1.jpg";
import Pic2 from "../../Assets/c-2.jpg";
import Faizan from "../../Assets/Faizan.png";
import Pic3 from "../../Assets/c-3.jpg";
import { Outlet } from "react-router-dom";
const Dashboard = ({ userId }) => {
  return (
    <div className="dashboardMain">
      <div className="imgDashboardMain"></div>
      <Header userId={userId} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
