import React, { useEffect, useState } from "react";

import Logo from "../../../assets/images/logo.png";
import Rectangle1 from "../../../assets/images/other/Rectangle1.png";
import Rectangle2 from "../../../assets/images/other/Rectangle2.png";
import Rectangle3 from "../../../assets/images/other/Rectangle3.png";
import Rectangle4 from "../../../assets/images/other/Rectangle4.png";
import Rectangle5 from "../../../assets/images/other/Rectangle5.png";
import Rectangle6 from "../../../assets/images/other/Rectangle6.png";
import Rectangle7 from "../../../assets/images/other/Rectangle7.png";
import Rectangle8 from "../../../assets/images/other/Rectangle8.png";
import BusStation from "../../../assets/images/other/station.png";
import StationMan from "../../../assets/images/other/people.png";
import Bus from "../../../assets/images/other/bus.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-container">
        <div className="header-Logo">
          <img src={Logo} alt="logo"></img>
          <p>提供最即時的公車動態，讓您輕鬆掌握資訊，<br/>現在就開始規劃您的路線吧！</p>
        </div>
        <div className="busAnim">
            <img src={Rectangle1} className="Rectangle Rectangle1"></img>
            <img src={Rectangle2} className="Rectangle Rectangle2"></img>
            <img src={Rectangle3} className="Rectangle Rectangle3"></img>
            <img src={Rectangle4} className="Rectangle Rectangle4"></img>
            <img src={Rectangle5} className="Rectangle Rectangle5"></img>
            <img src={Rectangle6} className="Rectangle Rectangle6"></img>
            <img src={Rectangle7} className="Rectangle Rectangle7"></img>
            <img src={Rectangle8} className="Rectangle Rectangle8"></img>
            <img src={BusStation} className="busStation"></img>
            <img src={StationMan} className="stationMan"></img>
            <img src={Bus} className="bus"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
