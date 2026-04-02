import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "../assets/rubesh.png";
import Footer from "./Footer";
import "./About.css";

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
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-white text-lg animate-pulse">Loading About...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="text-gray-50 w-full flex md:flex-row flex-col my-10 justify-evenly">
        <div className="md:w-100 w-70 mx-auto my-auto md:px-0 px-6 flex justify-center">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40 
                    bg-linear-to-r from-red-600/90 to-gray-600/90 
                    group-hover:opacity-60 transition duration-500"
            ></div>

            <img
              src={Hero}
              alt="About"
              className="relative w-62 h-86 md:w-72 md:h-full
                 object-cover rounded-xl border-3 border-gray-300 
                 
                 transform transition duration-500 ease-in-out
                 hover:scale-105

                 animate-[fadeZoom_1s_ease-out_forwards]
                 animate-[float_4s_ease-in-out_infinite]"
            />
          </div>
        </div>

        <div className="md:my-auto mt-5 md:w-1/2 md:px-0 px-6">
          <p className="md:text-4xl text-3xl pb-6 font-semibold">
            ABOUT <span className="text-red-600">Me</span>
          </p>

          <div className="text-gray-400 md:text-lg text-sm leading-relaxed px-3">
            <p className="mb-5">
              Hi Everyone, I am{" "}
              <span className="text-red-600">Rubesh Kumar R</span> from
              Tiruppur, Tamil Nadu.
            </p>

            <p className=" mb-5 ">
              I have completed my Bachelor's degree in Computer Science from
              NIFT-TEA College of Knitwear Fashion - Tiruppur.
            </p>

            <p className="mb-5">
              and I have completed my Full Stack Web Development course at{" "}
              <span className="text-red-600">HCL Guvi</span>, where I gained
              hands-on experience in building web applications using the MERN
              stack (MongoDB, Express.js, React.js, Node.js) and modern web
              technologies.
            </p>

            <p className=" mb-5 ">
              I am a passionate Full Stack Web Developer with a strong
              foundation in both front-end and back-end technologies. I enjoy
              building complete web applications from scratch — from designing
              responsive UI interfaces using React to developing secure backend
              APIs with Node.js and managing data with MongoDB.
            </p>

            <p className=" mb-10">
              As a fresher, I am eager to learn, improve my skills, and
              contribute to innovative projects that create real-world impact.
            </p>
          </div>
          <p className="md:text-4xl text-3xl pb-6 font-semibold">
            HOBBY <span className="text-red-600"> & </span> INTEREST
          </p>
          <div className="text-gray-400 md:text-lg text-sm leading-relaxed px-3">
            <p className="mb-5">
              👉 Playing Chess: I enjoy the strategic depth and mental challenge
              of chess, which helps me improve my problem-solving skills and
              patience.
            </p>
            <p className="mb-5">
              👉 Reading Tech Blogs: I enjoy staying updated with the latest
              trends in web development and exploring new technologies.
            </p>
            <p>
              👉 Traveling: I love exploring new places and cultures, which
              broadens my perspective and inspires creativity in my work.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
