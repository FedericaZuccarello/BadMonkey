import React from "react";
import { Link } from "react-router-dom";
import Logo from "./smallComponents/Logo";

const Sidebar = ({ menuItems, styles, deviceType }) => {
  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    backgroundColor: styles.black(0.8),
    paddingTop: 40,
  };

  const menuItemStyle = {
    textDecoration: "none",
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9),
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 0 : 10,
  };

  const logoStyle = {
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold",
  };
  /*const path = (item) => {
    generatePath(`/${item.href}/:deviceType`, {
      deviceType: deviceType,
    });
  };*/
  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
        {styles.sidebarCollapsed ? <Logo /> : <Logo />}
      </div>
      {menuItems.map((item, i) => (
        <Link
          style={menuItemStyle}
          key={i}
          to={{
            pathname: item.href,
            state: {
              deviceType: styles.sidebarCollapsed ? "tablet" : "desktop",
            },
          }}
        >
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
