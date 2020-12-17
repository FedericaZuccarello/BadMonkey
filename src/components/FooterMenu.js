import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = ({ menuItems, styles, deviceType }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0,
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <Link
            key={i}
            style={{
              textDecoration: "none",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
            to={{
              pathname: item.href,
              state: { deviceType: "mobile" },
            }}
          >
            <span style={{ marginRight: 5, fontSize: 20 }}>{item.icon}</span>
            {styles.showFooterMenuText && item.text}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterMenu;
