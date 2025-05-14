import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At Fusion , we believe that dining is an art and every meal tells a story. Nestled in the heart of [City/Location], our restaurant offers a perfect blend of exquisite flavors, intimate ambiance, and impeccable service.

              Our menu is crafted with passion and creativity, using only the freshest ingredients sourced locally. From our signature dishes to seasonal specialties, there's something to delight every palate. Pair your meal with a selection from our curated wine list or indulge in one of our signature cocktails.
               
              Reserve your table today and let us make your dining experience extraordinary!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              {/* <RouterLink to="/menu">
                        <button className="menuBtn">OUR MENU</button>
                      </RouterLink> */}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;