import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Hero from "../assets/Hero.png";
import Footer from "./Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="flex flex-col items-center gap-4">
            
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-white text-lg animate-pulse">
              Loading Home...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="text-gray-50 md:w-full flex md:flex-row w-full flex-col justify-evenly">
        <div className="md:my-auto mx-auto md:px-0 px-6">
          <h1 className="md:text-5xl text-3xl pb-3 pt-10 font-semibold">
            <div className="md:text-3xl text-xl pb-3">Hello, It's me</div>
            RUBESH KUMAR R
          </h1>

          <h2 className="md:text-3xl text-lg pb-5 font-semibold">
            And I'm a
            <span
              className="contant pl-2"
              style={{ "--i": 3 }}
              data-text="Frontend Developer"
            >
              Frontend Developer
            </span>
            <span
              className="contant pl-2"
              style={{ "--i": 2 }}
              data-text="Backend Developer"
            >
              Backend Developer
            </span>
            <span
              className="contant pl-2"
              style={{ "--i": 1 }}
              data-text="React Developer"
            >
              React Developer
            </span>
          </h2>

          <div>
           
          <p className="text-gray-400 md:text-xl text-lg leading-relaxed mb-3 w-full md:w-160">
            I am a passionate fresher MERN Stack Developer skilled in building 
            responsive and scalable web applications using MongoDB, Express.js, 
            React.js, and Node.js.
          </p>

          <p className="text-gray-400  md:text-lg text-md italic mb-6 w-full md:w-160">
            👉 Turning ideas into real-world web applications.
          </p>
          </div>

          <div className="flex md:flex-row flex-col items-center gap-4">
            <div className="btn py-2 md:px-10 md:w-46 w-36 md:mb-0 mb-3 px-5 mr-3 text-gray-950 bg-red-600 border-red-600 border-2 rounded-3xl font-semibold hover:bg-red-700 transition">
              <a href="/Rubesh_Kumar_Resume.pdf" download>
                Download CV
              </a>
            </div>

            <div className="flex md:my-2 mb-2  gap-1">
              <a
                className="socilaMediaIcons2 text-3xl"
                href="https://github.com/rubeshkumar135-glitch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                className="socilaMediaIcons3 text-3xl"
                href="https://www.linkedin.com/in/rubeshkumar01/"
              >
                <FaLinkedin />
              </a>

              <a
                className="socilaMediaIcons4 text-3xl"
                href="mailto:rubeshkumar135@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMailBulk />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-100 w-70 mx-auto">
          <img src={Hero} alt="Hero" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;