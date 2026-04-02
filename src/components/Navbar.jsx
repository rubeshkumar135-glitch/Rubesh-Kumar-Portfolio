import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaHome,
  FaUser,
  FaBrain,
  FaAlignJustify,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [button, setButton] = useState(false);

  return (
    <div className="navbar flex justify-between md:px10 px-5 py-4 items-center">
      <NavLink to="/">
        <p className="md:text-4xl text-2xl font-semibold text-red-600 md:px-10">
          Rubesh Kumar R
        </p>
      </NavLink>

      <ul>
        <div className="text-gray-50 md:text-lg hidden md:flex md:relative mr-4 gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `list flex px-1 py-1 ${
                isActive ? "text-red-500 border-b-2 border-red-500" : ""
              }`
            }
          >
            <FaHome className="icons text-2xl mx-2" /> Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `list flex px-1 py-1 ${
                isActive ? "text-red-500 border-b-2 border-red-500" : ""
              }`
            }
          >
            <FaUser className="icons text-2xl mx-2" /> About
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `list flex px-1 py-1 ${
                isActive ? "text-red-500 border-b-2 border-red-500" : ""
              }`
            }
          >
            <FaBrain className="icons text-2xl mx-2" /> Skills
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `list flex px-1 py-1 ${
                isActive ? "text-red-500 border-b-2 border-red-500" : ""
              }`
            }
          >
            <FaBook className="icons text-2xl mx-2" /> Project
          </NavLink>
        </div>

        <FaAlignJustify
          onClick={() => setButton(!button)}
          className="text-white right-5 absolute md:hidden flex text-lg -mt-2 mr-3 cursor-pointer"
        />

        {button && (
          <div className="text-gray-50 text-xs md:hidden flex flex-col z-10 gap-4 mr-6 mt-9 absolute right-0 bg-gray-800/60 backdrop-blur-lg rounded-lg p-4  shadow-lg">
            <NavLink
              to="/"
              onClick={() => setButton(false)}
              className={({ isActive }) =>
                `list flex px-1 py-1 ${isActive ? "text-red-500" : ""}`
              }
            >
              <FaHome className="icons text-lg mx-2" /> Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setButton(false)}
              className={({ isActive }) =>
                `list flex px-1 py-1 ${isActive ? "text-red-500" : ""}`
              }
            >
              <FaUser className="icons text-lg mx-2" /> About
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setButton(false)}
              className={({ isActive }) =>
                `list flex px-1 py-1 ${isActive ? "text-red-500" : ""}`
              }
            >
              <FaBrain className="icons text-lg mx-2" /> Skills
            </NavLink>

            <NavLink
              to="/project"
              onClick={() => setButton(false)}
              className={({ isActive }) =>
                `list flex px-1 py-1 ${isActive ? "text-red-500" : ""}`
              }
            >
              <FaBook className="icons text-lg mx-2" /> Project
            </NavLink>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
