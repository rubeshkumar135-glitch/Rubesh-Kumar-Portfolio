import Navbar from "./Navbar";
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import TAILWINDCSS from "../assets/TAILWINDCSS.png"
import JAVASCRIPT from "../assets/JAVASCRIPT.png"
import REACT from "../assets/REACT.png"
import NODEJS from "../assets/NODEJS.png"
import MYSQL from "../assets/MYSQL.png"
import EXPRESS from "../assets/EXPRESS.png"
import MONGODB from "../assets/MONGODB.png"
import GIT from "../assets/GIT.png"
import "./Skills.css"
import Footer from "./Footer";

import ShowImage from "./ShowImage";

function Skills () {

    const content = "As a passionate fresher MERN Stack Developer, I focus on building full-stack web applications with clean UI, efficient backend logic, and optimized database management. I am continuously learning and improving my development skills";

    const card = [
        {
            img:HTML,
            name:"HTML"
        },
        {
            img:CSS,
            name:"CSS"
        },
        {
            img:TAILWINDCSS,
            name:" TAILWIND CSS"
        },        
        {
            img:JAVASCRIPT,
            name:"JAVA SCRIPT"
        },
        {
            img:REACT,
            name:"REACT.JS"
        },
        {
            img:NODEJS,
            name:"NODE.JS"
        },
        {
            img:MYSQL,
            name:"MYSQL"
        },
        {
            img:EXPRESS,
            name:"EXPRESS"
        },
        {
            img:MONGODB,
            name:"MONGODB"
        },
        {
            img:GIT,
            name:"GIT"
        }

    ];

    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className="text-gray-50 text-center mx-auto mt-20 md:w-6/8 sm:4/8">
                <p className="md:text-5xl text-4xl pb-10 font-semibold"><span className="text-red-600">MY</span> Skills</p>
                <p className="md:text-xl text-sm md:px-0 px-3 ">{content}</p>
            </div>
            {<div className="scroll-container">
            <div className="scroll-content">
               {[...card,...card].map((src, index) => (
                <div>
                    <img
                    key={index}
                    src={src.img}
                    alt={`img-${index}`}
                    className="scroll-image"
                    />
                    <p className="text-container text-gray-50 text-center pr-5 md:text-lg text-sm font-semibold">{src.name}</p>
                </div>
                ))}
            </div>
        </div>}
        <div className="md:pb-5 pb-15 md:px-0 px-4">
            <ShowImage/>
        </div>
        <div >
            <Footer/>
        </div>
        </>
    )
}
export default Skills