import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { BASE_URL } from "../BASE_SKILL_NEST";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleLogin = async () => {
    const { email, password } = inputData;
    await axios
      .post(
        BASE_URL + "/user/login/",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((val) => {
        if (val.status === 200) {
          localStorage.setItem("userId", val.data.user_Id);
          localStorage.setItem("token", val.data.token);
          window.alert(val["data"]["message"]);
          setInputData({
            email: "",
            password: "",
          });
          navigate("/dashboard");
          document.location.reload();
        }
      })
      .catch((e) => {
        e.response !== undefined && window.alert(e.response["data"]["message"]);
      });
  };
  return (
    <div className="authMain">
      <div className="imgDashboardMain"></div>
      <div className="authForm">
        <h2 className="h2CEOLeft text-center text-white">ADMIN LOGIN</h2>
        <div className="inputsAuth">
          <input
            type="email"
            placeholder="Type email"
            className="inputFieldsAdmin"
            name="email"
            value={inputData.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Type password"
            className="inputFieldsAdmin"
            name="password"
            value={inputData.password}
            onChange={handleInput}
          />
          <button className="btnContent" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
