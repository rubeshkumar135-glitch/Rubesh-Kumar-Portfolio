import React from "react";
import Navbar from "./Navbar";
import Hero from "../assets/Hero.png"
import Footer from "./Footer";

function About () {
    return (
        <>
        <div>
            <div>
                <Navbar/>
            </div>
            
            <div className="text-gray-50 w-full flex md:flex-row sm:w-full flex-col justify-evenly">
                <div className="md:w-100 sm:w-70 sm:mx-auto">
                    <img src={Hero} />
                </div>
                <div className="md:my-auto sm:mx-auto sm:mt-5 md:w-1/2 md:px-0 sm:px-6">
                    <p className="md:text-5xl sm:text-4xl pb-6 font-semibold">ABOUT <span className="text-red-600">Me</span></p>
                    <p className="text-xl mb-5 ">
                        I am a passionate Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. 
                        I enjoy building complete web applications from scratch - from designing responsive UI interfaces using React to developing secure backend APIs with Node.js and managing data with MongoDB.
                    </p>
                    <p className="text-xl mb-10">
                        As a fresher, I am eager to learn, improve my skills, and contribute to innovative projects that create real-world impact.
                    </p>
                </div>
            </div>

            <div className="md:mt-0 sm:mt-10">
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default About