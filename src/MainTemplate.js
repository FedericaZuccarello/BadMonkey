import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Sidebar from "./components/Sidebar";
import WhatsappIcon from "./components/smallComponents/whatsappIcon";
import CalculateDeviceType from "./components/smallComponents/CalculateDeviceType";

function MainTemplate(props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [deviceType, setDeviceType] = useState("");

  let values = CalculateDeviceType();
  useEffect(() => {
    setWindowWidth(values.windowWidth);
    setDeviceType(values.deviceType);
  }, [values.deviceType, values.windowWidth]);

  const styles = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 40,
    footerMenuHeight: 50,
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarWidth: windowWidth < 1100 ? 50 : 150,
    sidebarCollapsed: windowWidth < 1100,
  };

  const menuItems = styles.showSidebar
    ? [
        { icon: `🏠`, text: "Home", href: "/" },
        { icon: `🛒`, text: "Shop", href: "/shop" },
        { icon: `📆`, text: "Prenotazioni", href: "/prenotazioni" },
        { icon: `✨`, text: "Curiositá", href: "/curiosita" },
        { icon: `🐒`, text: "Su di noi", href: "/sudinoi" },
        { icon: `⚙`, text: "LogIn", href: "/login" },
      ]
    : [
        { icon: `🏠`, text: "Home", href: "/" },
        { icon: `🛒`, text: "Shop", href: "/shop" },
        { icon: `📆`, text: "Prenotazioni", href: "/prenotazioni" },
        { icon: `✨`, text: "Curiositá", href: "/curiosita" },
        { icon: `🐒`, text: "Su di noi", href: "/sudinoi" },
      ];
  const { showSidebar } = styles;

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20,
  };
  return (
    <div
      style={{
        backgroundColor: styles.black(0.05),
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {styles.showSidebar ? (
        <>
          <Sidebar
            menuItems={menuItems}
            styles={styles}
            deviceType={deviceType}
          />
          <WhatsappIcon distanzaBottom={"20px"} />
          <div style={contentStyle}>{props.children}</div>
        </>
      ) : (
        <TopBar styles={styles} deviceType={deviceType} />
      )}

      {!styles.showSidebar && (
        <>
          <div style={contentStyle}>{props.children}</div>
          <WhatsappIcon distanzaBottom={"55px"} />
          <FooterMenu
            menuItems={menuItems}
            styles={styles}
            deviceType={deviceType}
          />
        </>
      )}
    </div>
  );
}

export default MainTemplate;
