import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { ReactTyped } from "react-typed";
import profile from "/farooque_profile.png";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome in my Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello I'm a </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Full Stack Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Aspiring Full Stack Developer with B.Tech in Computer Science with
              a passion for Full Stack Development. Adept at front-end
              technologies such as HTML, CSS, and JavaScript, coupled with
              back-end skills in Python. Solid foundation in database management
              with MySQL and a commitment to continuous learning. Eager to
              contribute to dynamic projects, demonstrate technical proficiency,
              and grow as a Full Stack Developer in a collaborative team
              environment.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex items-center flex-col md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook classname="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin classname="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaSquareInstagram classname="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube classname="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1>Currently working on</h1>
                <div className="flex space-x-5">
                  <FaPython className="text-xl md-text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <DiDjango className="text-xl md-text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md-text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNode className="text-xl md-text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-0 mt-8 order-1">
            <img
              src={profile}
              className="rounded-full md:w-[450px] md:h-[600px] h-[450px] w-[450px] "
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
