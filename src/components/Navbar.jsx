import React, { useState } from "react";
import { data } from "../pages/restAPI.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <div className="logo">SEVEN SINS</div>
        
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div> {/* <-- this closing div was missing */}

          <div>
            <button className="menuBtn" onClick={() => navigate('/menu')}>
              OUR MENU
            </button>
          </div>
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
