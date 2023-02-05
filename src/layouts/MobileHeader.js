import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="#" className="active">
            Home
          </a>
          <ul className="sub-menu" style={activeLi("home")}>
            <li>
              <Link href="/">Home Agriculture</Link>
            </li>
            <li>
              <Link href="/index-2">Home Organic Food</Link>
            </li>
            <li>
              <Link href="/index-3">Home Farming</Link>
            </li>
            <li>
              <Link href="/index-4">Home Dairy Farm</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="portfolio-details">Our Portfolio</Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">Other Pages</a>
          <ul className="sub-menu" style={activeLi("Pages")}>
            <li>
              <Link href="farmers">Our Team</Link>
            </li>
            <li>
              <Link href="faqs">Faq</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;
