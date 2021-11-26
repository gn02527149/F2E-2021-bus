import React, { useCallback, useState } from "react";
import { useHistory } from 'react-router-dom';

import Busicon from "../../../assets/images/icons/busIcon.png"

import "./TopNavigation.scss";
import { Link } from "react-router-dom";

const TopNavigation = () => {
  const history = useHistory();
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div id="top-navigation">
      <div className="inner-container">
        <ul>
          <Link className="cityBus" to="/F2E-2021-bus/">
            <img src={Busicon} className="Busicon"/>
            市區公車
          </Link>
          <Link className="not-allowed" to={`/F2E-2021-bus/:searchKind/search-result`}>
            <img src={Busicon} className="Busicon"/>
            公路客運
          </Link>
          <Link className="not-allowed" to="/">
            <img src={Busicon} className="Busicon"/>
            乘車規劃
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavigation;
