import React, {useState}from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import SubMenu from './SubMenu';
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle }) => {
  return(
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>Bootstrap Sidebar</h3>
      </div>
      <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
<p>Dummy Heading</p>
<SubMenu title="Home" items={submenus[0]} />
<NavItem >
  <NavLink tag={Link} to={"/about"}>
    {/* <FontAwesomeIcon className="mr-2" /> */}
    About
  </NavLink>
</NavItem>
<SubMenu title="Pages" items={submenus[1]} />
<NavItem>
  <NavLink tag={Link} to={"/pages"}>
    {/* <FontAwesomeIcon className="mr-2" /> */}
    Portfolio
  </NavLink>
</NavItem>
<NavItem>
  <NavLink tag={Link} to={"/faq"}>
    {/* <FontAwesomeIcon className="mr-2" /> */}
    FAQ
  </NavLink>
</NavItem>
<NavItem>
  <NavLink tag={Link} to={"/contact"}>
    {/* <FontAwesomeIcon className="mr-2" /> */}
    Contact
  </NavLink>
</NavItem>
</Nav>
      </div>
    </div>
  )
  }
  
  const submenus = [
    [
      {
        title: "Home 1",
        target: "Home-1",
      },
      {
        title: "Home 2",
        target: "Home-2",
      },
      {
        itle: "Home 3",
        target: "Home-3",
      },
    ],
    [
      {
        title: "Page 1",
        target: "Page-1",
      },
      {
        title: "Page 2",
        target: "Page-2",
      },
    ],
  ];

export default Sidebar


