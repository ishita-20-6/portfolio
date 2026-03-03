import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

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
          <div className="md:hidden bg-black/90 text-center py-6 space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
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
          <a
            href="https://github.com/ishita-20-6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ishita-chaturvedi-943441303/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/chaturvedi.ishita.06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-blue-500/40 transition duration-300 shadow-lg"
        >
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
              <div
                key={skill}
                className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:scale-105 hover:-translate-y-2 hover:bg-blue-500/20 transition duration-300"
              >
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
              {
                title: "Resume Screening System",
                desc: "AI-based resume parser with ATS score generation.",
                link: "https://github.com/ishita-20-6"
              },
              {
                title: "Blockchain ID System",
                desc: "Secure student verification system using blockchain.",
                link: "https://github.com/ishita-20-6/CyberSecure-ID-AI-Blockchain-Based-Student-Verification"
              },
              {
                title: "Portfolio Website",
                desc: "Personal portfolio built with React & Tailwind.",
                link: "https://github.com/ishita061"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/20 transition duration-300 text-left"
              >
                <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center bg-black/60">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h3>
        <p className="text-gray-400 mb-6">Let’s build something amazing together.</p>

        <a
          href="mailto:ishita@example.com"
          className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-blue-500/40 transition duration-300 shadow-lg"
        >
          Send Email
        </a>
      </section>

      <footer className="bg-black/70 text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Ishita. All rights reserved.
      </footer>
    </div>
  );
}
