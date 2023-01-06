import React from "react";
import Search from "./Search";
import Logo from "../res/logo.png";
import Image from "next/image";
import NavItem from "./Nav/NavItem";
import NavDetails from "./Nav/NavDetails";

export default function Nav() {
  return (
    <div className="nav">
      <div className="mainWrapper">
        <div className="logo">
          <Image alt="Logo" src={Logo} />
          LEGiON Platfoms
        </div>
        <div className="links">
          <NavItem title="Products" ExpandedElem={<NavDetails />} />
          <NavItem title="Company" ExpandedElem={<NavDetails />} />
          <NavItem title="Resources" ExpandedElem={<NavDetails />} />
          {/* <NavItem title="Careers" ExpandedElem={<NavDetails />} /> */}
        </div>
        <div className="right-bar">
          <Search />
          <div className="nav-btn">Contact</div>
        </div>
      </div>
    </div>
  );
}
