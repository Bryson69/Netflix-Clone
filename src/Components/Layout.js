import React from "react";
import Nav from "./Layout/Nav";
import Banner from "./Banner";

const Layout = ({ children, showBanner = true }) => {
  return (
    <div>
      <Nav />
      {showBanner && <Banner />}
      {children}
    </div>
  );
};

export default Layout;
