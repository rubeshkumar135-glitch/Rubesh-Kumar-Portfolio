import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FoodieHub from "../assets/FoodieHub.png";
import Portfolio from "../assets/PortfolioImage.png";
import MovieSearch from "../assets/MovieSearchingApp.png";
import NotesApp from "../assets/NotesApp.png";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    title: "Movie Searching App",
    description:
      "A React-based movie search app that fetches real-time data from the TMDB API to explore and view movie details.",
    image: MovieSearch,
    tech: ["React", "Tailwind"],
    live: "https://movie-review-app-coral.vercel.app/",
    github:
      "https://github.com/rubeshkumar135-glitch/Movie-Review-App.git",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "A simple and responsive notes app that allows users to create, edit, and delete notes easily.",
    image: NotesApp,
    tech: ["React", "Tailwind"],
    live: "https://notes-app-kappa-kohl.vercel.app/",
    github: "https://github.com/rubeshkumar135-glitch/notes-app.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills with a modern UI.",
    image: Portfolio,
    tech: ["React", "Tailwind"],
    live: "https://rubesh-kumar-portfolio.vercel.app/",
    github:
      "https://github.com/rubeshkumar135-glitch/Rubesh-Kumar-Portfolio.git",
  },
  {
    id: 4,
    title: "Restaurant Reservation App",
    description:
      "A full-stack restaurant reservation app for booking and managing tables in real time.",
    image: FoodieHub,
    tech: ["React", "Tailwind", "JWT", "Cloudinary"],
    live: "https://restaurant-reservation-platform-fro-seven.vercel.app/",
    github: [
      "https://github.com/rubeshkumar135-glitch/restaurant-reservation-platform-frontend.git",
      "https://github.com/rubeshkumar135-glitch/restaurant-reservation-platform-backend.git",
    ],
  },
];

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay
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

            <p className="text-white text-lg animate-pulse">
              Loading Projects...
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white px-4 py-10">
        <h1 className="md:text-4xl text-3xl pb-6 font-semibold text-center mb-10">
          <span className="text-red-600">My</span> Projects
        </h1>

        <p className="text-gray-400 mb-10 text-center max-w-2xl md:text-lg text-md mx-auto">
          Here are some of the projects I have built to showcase my skills in full-stack development using the MERN stack and modern web technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group perspective">
              <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform group-hover:rotate-y-6 group-hover:rotate-x-3 group-hover:scale-105 hover:shadow-red-500/50">
                
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 px-2 py-1 text-xs rounded-md shadow-inner"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
                    >
                      Live
                    </a>

                    {Array.isArray(project.github) ? (
                      <>
                        <a
                          href={project.github[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600 transition"
                        >
                          Frontend
                        </a>
                        <a
                          href={project.github[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600 transition"
                        >
                          Backend
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-600 transition"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-red-500/10 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
      <Footer/>

      </div>
    </>
  );
}

export default Projects;