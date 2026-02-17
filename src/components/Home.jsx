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
       <div className="text-gray-50 md:w-full flex md:flex-row w-full flex-col justify-evenly">
        <div className="md:my-auto mx-auto sm:mt-10">
            <h1 className="md:text-6xl text-3xl pb-3 pt-5 font-bold">
                <div className="md:text-4xl text-xl pb-3">Hello, It's me</div>
                RUBESH KUMAR R
            </h1>
            <h2 className="md:text-4xl text-lg pb-5 font-semibold">And I'm a 
                <span className="contant pl-2" style={{"--i":3}} data-text="Frontend Developer">Frontend Developer</span>
                <span className="contant pl-2" style={{"--i":2}} data-text="Backend Developer">Backend Developer</span>
                <span className="contant pl-2" style={{"--i":1}} data-text="React Developer">React Developer</span>
            </h2>
            <div className="flex md:flex-row flex-col">
                <div className="btn py-2 md:px-10 md:w-46 w-36 md:mb-0 mb-3 px-5 mr-3 text-gray-950 bg-red-600 border-red-600 border-2 rounded-3xl font-semibold">
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
        <div className="md:w-100 w-70 mx-auto">
            <img src={Hero}/>
        </div>
       </div>
       <div className="absolute bottom-0 right-0 left-0">
        <Footer/>
       </div>
       </>
    )
}

export default Home