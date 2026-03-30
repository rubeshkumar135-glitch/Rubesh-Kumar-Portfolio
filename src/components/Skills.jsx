import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import TAILWINDCSS from "../assets/TAILWINDCSS.png";
import JAVASCRIPT from "../assets/JAVASCRIPT.png";
import REACT from "../assets/REACT.png";
import NODEJS from "../assets/NODEJS.png";
import MYSQL from "../assets/MYSQL.png";
import EXPRESS from "../assets/EXPRESS.png";
import MONGODB from "../assets/MONGODB.png";
import GIT from "../assets/GIT.png";
import "./Skills.css";
import Footer from "./Footer";
import ShowImage from "./ShowImage";

function Skills() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const content =
    "As a passionate fresher MERN Stack Developer, I focus on building full-stack web applications with clean UI, efficient backend logic, and optimized database management. I am continuously learning and improving my development skills";

  const card = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: TAILWINDCSS, name: "TAILWIND CSS" },
    { img: JAVASCRIPT, name: "JAVASCRIPT" },
    { img: REACT, name: "REACT.JS" },
    { img: NODEJS, name: "NODE.JS" },
    { img: MYSQL, name: "MYSQL" },
    { img: EXPRESS, name: "EXPRESS" },
    { img: MONGODB, name: "MONGODB" },
    { img: GIT, name: "GIT" },
  ];

  // 🔥 Loader UI
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
              Loading Skills...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="text-gray-50 text-center mx-auto mt-20 md:w-6/8 sm:4/8">
        <p className="md:text-4xl text-3xl pb-8 font-semibold">
          <span className="text-red-600">MY</span> Skills
        </p>
        <p className="text-gray-400  md:text-lg text-sm md:px-0 px-4">{content}</p>
      </div>

      <div className="scroll-container">
        <div className="scroll-content">
          {[...card, ...card].map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={src.img}
                alt={src.name}
                className="scroll-image hover:scale-110 transition duration-300"
              />
              <p className="text-container text-gray-50 text-center pr-5 md:text-lg text-sm font-semibold">
                {src.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:pb-5 pb-15 md:px-0 px-4">
        <ShowImage />
      </div>

      <Footer />
    </>
  );
}

export default Skills;