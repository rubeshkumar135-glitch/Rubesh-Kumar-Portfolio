import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaHome, FaUser, FaBrain } from "react-icons/fa";
import "./Navbar.css";

function Navbar () {
    return (
        <div className="navbar flex  justify-between md:px-10 px-8 py-7 ">
           <Link to="/">
             <p className="md:text-4xl text-2xl font-semibold text-red-600 md:px-10 ">Rubesh Kumar R</p>
           </Link>
           <ul className=" text-gray-50  text-lg md:flex sm:hidden gap-5">
            <Link className="list flex px-1 py-1" to="/"><FaHome className="icons text-2xl mx-2"/> Home</Link>
            <Link className="list flex px-1 py-1" to="/about"><FaUser className="icons text-2xl mx-2"/> About</Link>
            <Link className="list flex px-1 py-1" to="/skills"><FaBrain className="icons text-2xl mx-2"/> Skills</Link>
            {/* <Link className="list flex px-1 py-1" to="/project"><FaBook className="icons text-2xl mx-2"/> Project</Link> */}
            
            <span></span>
           </ul>
        </div>
    )
}

export default Navbar