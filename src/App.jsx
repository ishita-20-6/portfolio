import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes, FaCode, FaExternalLinkAlt, FaBook } from "react-icons/fa";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-lg z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">Ishita</h1>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#pese-600" className="hover:text-blue-400 transition">PESE-600</a>
            <a href="#coding" className="hover:text-blue-400 transition">Coding</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90 text-center py-6 space-y-4 flex flex-col">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#pese-600" onClick={() => setIsOpen(false)}>PESE-600</a>
            <a href="#coding" onClick={() => setIsOpen(false)}>Coding</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30"></div>
          <img
            src="/image/profile1.jpeg"
            alt="profile"
            className="relative w-36 h-36 rounded-full border-4 border-blue-400 shadow-xl object-cover"
          />
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Ishita
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-6 max-w-xl">
          Frontend Developer passionate about building beautiful and responsive web applications.
        </p>

        <div className="flex gap-6 text-2xl mb-8">
          <a href="https://github.com/ishita-20-6" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ishita-chaturvedi-943441303/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/chaturvedi.ishita.06" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition hover:scale-110">
            <FaInstagram />
          </a>
        </div>

        <a href="#projects" className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-blue-500/40 transition duration-300 shadow-lg">
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-black/60">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            Pre-final year Engineering student passionate about problem-solving and development.
            Skilled in C, C++, Python, Java, React, Node.js, MongoDB, and AWS.
            Actively improving Data Structures & Algorithms and exploring Machine Learning.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-blue-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "MongoDB", "Git"].map((skill) => (
              <div key={skill} className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:scale-105 hover:-translate-y-2 hover:bg-blue-500/20 transition duration-300">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-black/60">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-16 text-blue-400">Projects</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Resume Screening System", desc: "AI-based resume parser with ATS score generation.", link: "https://github.com/ishita-20-6" },
              { title: "Blockchain ID System", desc: "Secure student verification system using blockchain.", link: "https://github.com/ishita-20-6/CyberSecure-ID-AI-Blockchain-Based-Student-Verification" },
              { title: "Portfolio Website", desc: "Personal portfolio built with React & Tailwind.", link: "https://github.com/ishita061" },
              {
                title: "Genie- Gen-AI Based Task Management", desc: "An Intelegent Gen-AI Based task manager.", link: "https://github.com/ishita-20-6/portfolio"
              },
              {
                title: "SudokuApp", desc: "The Sudoku Android App is a mobile-based puzzle game developed using Android Studio and Java.", link: "https://github.com/ishita-20-6/SudokuApp"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-800/60 p-6 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/20 transition duration-300 text-left">
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-2">
                  View Project <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PESE-600 Section - Cleaned Layout */}
      <section id="pese-600" className="py-24 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 text-blue-400 flex items-center justify-center gap-3">
              <FaBook className="text-2xl" /> PESE-600: Skill Development
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A comprehensive record of my professional training sessions and skill assessments, demonstrating readiness for the corporate world.
            </p>
          </div>

          {/* Video Grid - Fixed spacing and cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: "Self Introduction",
                desc: "Presenting a clear and confident professional background, highlighting key strengths.",
                // REPLACE_ID_1: The random letters at the end of your YouTube embed link
                embedUrl: "https://www.youtube.com/embed/REPLACE_ID_1"
              },
              {
                title: "Resume & Portfolio Session",
                desc: "Expert review of professional documentation, ensuring ATS optimization and project impact.",
                embedUrl: "https://www.youtube.com/embed/REPLACE_ID_2"
              },
              {
                title: "Extempore & JAM",
                desc: "Drills focused on spontaneous speaking to enhance critical thinking and coherence under pressure.",
                embedUrl: "https://www.youtube.com/embed/REPLACE_ID_3"
              },
              {
                title: "Group Discussion (GD)",
                desc: "Collaborative problem-solving exercise emphasizing active listening and structured argumentation.",
                embedUrl: "https://www.youtube.com/embed/REPLACE_ID_4"
              },
              {
                title: "Interview Skills",
                desc: "Mock interviews covering technical concepts and behavioral questions using the STAR method.",
                embedUrl: "https://www.youtube.com/embed/REPLACE_ID_5"
              }
            ].map((session, index) => (
              <div
                key={index}
                className="bg-gray-800/40 rounded-3xl border border-gray-700/60 overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col group"
              >
                {/* Video Container:
            `aspect-video` keeps it 16:9 perfectly.
            The inner container and gradient fix the scrollbar and make the card feel cleaner.
          */}
                <div className="relative aspect-video w-full bg-black">
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-950 to-black">
                    {/* Optional: Add a placeholder loading spinner here */}
                  </div>

                  <iframe
                    className="relative z-10 w-full h-full"
                    src={session.embedUrl}
                    title={session.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Content below video */}
                <div className="p-6 md:p-8">
                  <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 mb-2 transition-colors duration-300">
                    {session.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {session.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding" className="py-24 px-6 bg-black/60">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-blue-400 flex items-center justify-center gap-3">
            <FaCode className="text-2xl" /> Coding Profiles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* LeetCode Card */}
            <a href="https://leetcode.com/u/ishita-20/" target="_blank" rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400">LeetCode</h4>
              <p className="text-gray-400 text-sm">Solved 200+ Problems in C++/Java</p>
            </a>

            {/* GitHub Card - FIXED URL HERE */}
            <a href="https://github.com/ishita-20-6" target="_blank" rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400">GitHub</h4>
              <p className="text-gray-400 text-sm">30+ Repositories & Open Source contributions</p>
            </a>

            {/* HackerRank Card */}
            <a href="https://www.hackerrank.com/profile/ishita_20_6" target="_blank" rel="noopener noreferrer"
              className="group bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-2 group-hover:text-blue-400">HackerRank</h4>
              <p className="text-gray-400 text-sm">5 Star in Problem Solving & Java</p>
            </a>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h3>
        <p className="text-gray-400 mb-6">Let’s build something amazing together.</p>
        <a href="mailto:ishita@example.com" className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-blue-500/40 transition duration-300 shadow-lg">
          Send Email
        </a>
      </section>

      <footer className="bg-black/70 text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Ishita. All rights reserved.
      </footer>
    </div>
  );
}
