import Search from "./Search";
import Logo from "../res/logo.png";
import Image from "next/image";
import NavItem from "./Nav/NavItem";
// import NavDetails from "./Nav/NavDetails";
import ProductsDetails from "./Nav/ProductsDetails";
import CompanyDetails from "./Nav/CompanyDetails";
import ResourcesDetails from "./Nav/ResourcesDetails";

export default function Nav() {
  return (
    <div className="nav">
      <div className="mainWrapper">
        <div className="logo">
          <Image alt="Logo" src={Logo} />
          LEGiON Platfoms
        </div>
        <div className="links">
          <NavItem title="Products" ExpandedElem={<ProductsDetails />} />
          <NavItem title="Company" ExpandedElem={<CompanyDetails />} />
          <NavItem title="Resources" ExpandedElem={<ResourcesDetails />} />
          {/* <NavItem title="Careers" ExpandedElem={<NavDetails />} /> */}
        </div>
        <div className="right-bar">
          <Search />
          <div className="nav-btn" onClick={() => console.log("Hi")}>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
