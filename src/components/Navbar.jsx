import React, { useState } from "react";
import { data } from "../pages/restAPI.json";
import { Link as ScrollLink } from "react-scroll"; // For scroll links
import { Link as RouterLink } from "react-router-dom"; // ✅ React Router link
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">FUSION</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>

        {/* ✅ Redirect to /menu page on click */}
        <RouterLink to="/menu">
          <button className="menuBtn">OUR MENU</button>
        </RouterLink>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
