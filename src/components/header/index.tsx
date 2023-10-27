import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/icon/sjlogo.svg";
import { ReactComponent as SjLogo } from "../../assets/icon/sn-logo.svg";

import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
        <SjLogo />
      </div>
      <div className="content">
        <NavLink to="/terms&conditions">
          <p>Terms conditions</p>
        </NavLink>
        <NavLink to="/refund-policy">
          <p>Refund policy</p>
        </NavLink>
        <NavLink to="/privacy-policy">
          <p>Privacy policy</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
