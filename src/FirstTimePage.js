// import React from 'react';
import {useNavigate} from "react-router"
import './FirstTimePage.css';
import FirstTimeLogo from "./images/first-login.png"
import RezolveLogo from "./images/rezolve-logo.png"
import TemperatureGraph from "./MainPages/Body/GraphPage";

const FirstTimePage = () => {
    const navigate = useNavigate();
    const submitHander = () => {
        navigate("/main-page")
    }
    return <div className="pageWrapper">
        <div className="headeText">First Time User - Login By Phone Number</div>
        <img src={FirstTimeLogo} onClick={submitHander} className="proceedImage" alt="FirstTimeLogo"/>
        <img src={RezolveLogo} alt = "RezolveLogo" className="footer" />
        <TemperatureGraph />
    </div>
}
export default FirstTimePage