import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">

      {/* Navbar */}
      <nav className="fixed w-full bg-black/40 backdrop-blur-lg z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">Ishita</h1>

          <div className="space-x-6 hidden md:flex font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#coding" className="hover:text-blue-400 transition">Coding Profiles</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24">

        {/* Profile with Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30"></div>

          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="relative w-36 h-36 rounded-full border-4 border-blue-400 shadow-xl object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Ishita
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-6 max-w-xl">
          Frontend Developer passionate about building beautiful and responsive web applications.
        </p>

        {/* Social Icons */}
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
            href="https://www.linkedin.com/in/ishita-chaturvedi-943441303/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Button */}
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-500 to-blue-600 
          px-8 py-3 rounded-full font-semibold 
          hover:scale-105 hover:shadow-blue-500/40 
          transition duration-300 shadow-lg"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-black/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            Pre-final year Engineering student at Graphic Era Hill University with strong technical foundations and a passion for problem-solving. Skilled in C, C++, Python, and Java, along with frontend (HTML, CSS, JavaScript, React.js) and backend development (Node.js, Express.js, REST APIs). Experienced in Flutter for mobile app development, AWS cloud fundamentals, and MySQL database management. Actively strengthening expertise in Data Structures and Algorithms and exploring machine learning through practical projects.
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
                className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                hover:scale-105 hover:bg-blue-500/20 hover:shadow-blue-500/20 
                transition duration-300 cursor-pointer"
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
                tech: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Blockchain ID System",
                desc: "Secure verification system using blockchain.",
                tech: ["Solidity", "React"]
              },
              {
                title: "Portfolio Website",
                desc: "Personal portfolio built with React & Tailwind.",
                tech: ["React", "Tailwind"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-xl 
                hover:scale-105 hover:shadow-blue-500/20 
                transition duration-300 text-left"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-400 mb-4">
                  {project.desc}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a href="#" className="text-blue-400 hover:underline">
                  Live Demo →
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Coding Profiles */}
      <section id="coding" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12 text-blue-400">
            Coding Profiles
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "LeetCode",
                url: "https://leetcode.com/u/ishita-20/"
              },
              {
                name: "GeeksforGeeks",
                url: "https://www.geeksforgeeks.org/profile/ishita_206"
              },
              {
                name: "GitHub",
                url: "https://github.com/ishita061"
              }
            ].map((platform) => (
              <div
                key={platform.name}
                className="bg-gray-800/60 p-6 rounded-2xl shadow-lg 
          hover:scale-105 hover:shadow-blue-500/20 
          transition duration-300"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {platform.name}
                </h4>
                <p className="text-gray-400 mb-4">
                  Competitive programming & development work.
                </p>
                <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center bg-black/60">
        <h3 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h3>
        <p className="text-gray-400 mb-6">
          Let’s build something amazing together 
        </p>
        <a
          href="mailto:yourmail@gmail.com"
          className="bg-gradient-to-r from-blue-500 to-blue-600 
          px-8 py-3 rounded-full font-semibold 
          hover:scale-105 hover:shadow-blue-500/40 
          transition duration-300 shadow-lg"
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
