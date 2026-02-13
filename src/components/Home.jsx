import React from "react";
import Navbar from "./Navbar";
import "./Home.css"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import Hero from "../assets/Hero.png"
import Footer from "./Footer";


function Home () {
    return (
       <>
       <div>
        <Navbar/>
       </div>
       <div className="text-gray-50 w-full flex md:flex-row sm:w-full flex-col justify-evenly">
        <div className="md:my-auto sm:mx-auto sm:mt-10">
            <h1 className="md:text-6xl sm:text-4xl pb-3 font-bold">
                <div className="md:text-4xl sm:text-2xl pb-3">Hello, It's me</div>
                RUBESH KUMAR R
            </h1>
            <h2 className="md:text-4xl sm:text-2xl pb-5 font-semibold">And I'm a 
                <span className="contant pl-2" style={{"--i":3}} data-text="Frontend Developer">Frontend Developer</span>
                <span className="contant pl-2" style={{"--i":2}} data-text="Backend Developer">Backend Developer</span>
                <span className="contant pl-2" style={{"--i":1}} data-text="React Developer">React Developer</span>
            </h2>
            <div className="flex">
                <div className="btn py-2 md:px-10 sm:px-5 mr-3 text-gray-950 bg-red-600 border-red-600 border-2 rounded-3xl font-semibold">
                    <a  href="#">Download CV</a>
                </div>
                <div className="flex  my-2">
                    <a className="socilaMediaIcons1 text-3xl " href="tel:8754692952"><FaSquarePhone/></a>
                    <a className="socilaMediaIcons2 text-3xl" href="https://github.com/rubeshkumar135-glitch" target="_blank"><FaGithub/></a>
                    <a className="socilaMediaIcons3 text-3xl " href="#"><FaLinkedin/></a>
                    <a className="socilaMediaIcons4 text-3xl " href="mailto:rubeshkumar135@gmail.com" target="_blank"><FaMailBulk/></a>
                </div>
            </div>
        </div>+
        <div className="md:w-100 sm:w-70 sm:mx-auto">
            <img src={Hero}/>
        </div>
       </div>
       <div>
        <Footer/>
       </div>
       </>
    )
}

export default Home