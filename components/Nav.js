import Search from "./Search";
import Logo from "../res/logo.png";
import Image from "next/image";
import NavItem from "./Nav/NavItem";
// import NavDetails from "./Nav/NavDetails";
import ProductsDetails from "./Nav/ProductsDetails";
import CompanyDetails from "./Nav/CompanyDetails";
import ResourcesDetails from "./Nav/ResourcesDetails";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="nav">
      <div className="mainWrapper">
        <div className="logo" onClick={() => router.push("/")}>
          <Image alt="Logo" src={Logo} />
          LEGiON Platforms
        </div>
        <div className="links">
          <NavItem title="Products" ExpandedElem={<ProductsDetails />} />
          <NavItem title="Company" ExpandedElem={<CompanyDetails />} />
          <NavItem title="Resources" ExpandedElem={<ResourcesDetails />} />
          {/* <NavItem title="Careers" ExpandedElem={<NavDetails />} /> */}
        </div>
        <div className="right-bar">
          <Search />
          <div className="nav-btn">
            <i class="ri-mail-line"></i>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
