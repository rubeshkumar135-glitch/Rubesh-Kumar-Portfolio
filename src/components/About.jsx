import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "../assets/Hero.png";
import Footer from "./Footer";

function About() {
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
            
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

            {/* Text */}
            <p className="text-white text-lg animate-pulse">
              Loading About...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="text-gray-50 w-full flex md:flex-row flex-col justify-evenly">
        
        {/* Image */}
        <div className="md:w-100 w-70 mx-auto">
          <img
            src={Hero}
            alt="About"
            className="hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="md:my-auto mt-5 md:w-1/2 md:px-0 px-6">
          <p className="md:text-4xl text-3xl pb-6 font-semibold">
            ABOUT <span className="text-red-600">Me</span>
          </p>

         <div className="text-gray-400 md:text-lg text-sm leading-relaxed px-3">
           <p className="mb-5">
            Hi Everyone, I am <span className="text-red-600">Rubesh Kumar R</span> from Tiruppur, Tamil Nadu.
           
          </p>

          <p className=" mb-5 ">
            I have completed my Bachelor's degree in Computer Science from NIFT-TEA College of Knitwear Fashion - Tiruppur. 
          </p>

          <p className="mb-5">
            and I have completed my Full Stack Web Development course at <span className="text-red-600">HCL Guvi</span>, where I gained hands-on experience in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern web technologies. 
          </p>

          <p className=" mb-5 ">
            I am a passionate Full Stack Web Developer with a strong foundation
            in both front-end and back-end technologies. I enjoy building
            complete web applications from scratch — from designing responsive
            UI interfaces using React to developing secure backend APIs with
            Node.js and managing data with MongoDB.
          </p>

          <p className=" mb-10">
            As a fresher, I am eager to learn, improve my skills, and contribute
            to innovative projects that create real-world impact.
          </p>
         </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;