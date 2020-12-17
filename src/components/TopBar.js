import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/Logo.png";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    borderBottom: "1px solid #d8d8d8",
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
  };

  return (
    <div style={topBarStyle}>
      <Link to="/">
        <img src={LogoImg} alt="Logo" style={{ width: "37px" }} />
      </Link>
      <pre style={{ fontFamily: "bold", marginRight: "40px" }}>
        Bad Monkey - Softair Shop
      </pre>
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;
