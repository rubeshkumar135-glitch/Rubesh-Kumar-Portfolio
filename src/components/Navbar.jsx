import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaHome, FaUser, FaBrain, FaAlignJustify } from "react-icons/fa";
import "./Navbar.css";

function Navbar () {
    const [button, setButton] = useState(false);
    return (
        <div className="navbar flex  justify-between md:px-10 px-8 py-7 ">
            <Link to="/">
                <p className="md:text-4xl text-2xl font-semibold text-red-600 md:px-10 ">Rubesh Kumar R</p>
            </Link>

            <ul className="">
                 <div className=" text-gray-50  md:text-lg hidden md:flex md:relative md:mt-0 mt-0 mr-4 gap-5">
                        <Link className="list flex px-1 py-1" to="/"><FaHome className="icons text-2xl mx-2"/> Home</Link>
                        <Link className="list flex px-1 py-1" to="/about"><FaUser className="icons text-2xl mx-2"/> About</Link>
                        <Link className="list flex px-1 py-1" to="/skills"><FaBrain className="icons text-2xl mx-2"/> Skills</Link>
                        <Link className="list flex px-1 py-1" to="/project"><FaBook className="icons text-2xl mx-2"/> Project</Link>
                        
                        <span></span>
                    </div>
                <FaAlignJustify onClick={() => setButton(!button)} className="text-white right-5 absolute md:hidden flex text-lg mt-1"/>
                {button && (
                    <div className=" text-gray-50  md:text-lg  text-xs  md:flex md:relative md:mt-0 mt-0 mr-4 gap-5">
                        <Link className="list flex px-1 py-1" to="/"><FaHome className="icons text-lg mx-2"/> Home</Link>
                        <Link className="list flex px-1 py-1" to="/about"><FaUser className="icons text-lg mx-2"/> About</Link>
                        <Link className="list flex px-1 py-1" to="/skills"><FaBrain className="icons text-lg mx-2"/> Skills</Link>
                        <Link className="list flex px-1 py-1" to="/project"><FaBook className="icons text-lg mx-2"/> Project</Link>
                        
                        <span></span>
                    </div>
                )}
                
            </ul>
          

            
           
        </div>
    )
}

export default Navbar