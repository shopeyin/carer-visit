import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import CarerVisits from "../carervisits/CarerVisits";
import "./carerpage.style.scss";


function CarerPage() {
  const currentUser = useSelector((state) => state.user.currentUser);

  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser.role === "admin") {
      navigate("/admin");
    }
  }, [currentUser, navigate]);

  return <CarerVisits currentUser={currentUser} />;
}
export default CarerPage;
