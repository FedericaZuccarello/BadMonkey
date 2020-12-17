import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/Logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoImg}
        alt="Logo"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Link>
  );
};

export default Logo;
