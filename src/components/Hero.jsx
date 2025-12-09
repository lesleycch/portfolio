import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import profilePhoto from "../assets/images/profile_pic.png";
import { motion } from "framer-motion";
import pmp from "../assets/images/PMP.png"

export const Hero = () => {
  return (

    <motion.div className="mt-0 sm:mt-10 lg:mt-20 px-10 md:px-18 lg:px-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      {/* Intro */}
      <motion.section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 px-0 md:px-0 lg:px-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        {/* Image + Social Links */}
        <div className="w-full h-auto object-cover grid grid-cols-1 justify-items-center md:justify-items-start">
          <div className="mt-8 sm:mt-0 pr-0 sm:pr-6 lg:mr-8">
            <img
              src={profilePhoto}
              alt="Lesley Chang"
              className="hero-image"
            />
             {/* Social Links */}
          <div className="social-links text-stone-500 text-2xl md:text-3xl flex justify-center">
            <a href="https://www.linkedin.com/in/leschang" target="_blank" className="duration-300 ease-in">
              <i className="fab fa-linkedin"> </i>
            </a>
            <a href="mailto:lesleycch@gmail.com" className="ml-4 duration-300 ease-in"><i className="fas fa-envelope"> </i></a> 
            <a href="https://github.com/lesleycch" target="_blank" className="ml-4 duration-300 ease-in"><i className="fab fa-github"> </i></a>
          </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-full h-auto object-cover">
          <div className="text-base/7 flex flex-col justify-center">
              <div className="pb-6">
                Hi 👋🏻  My name is Lesley Chang. I'm a seasoned <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-cyan-600 hover:decoration-cyan-500">Software Developer</span> and data-driven <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-cyan-600 hover:decoration-cyan-500">PMP®-Certified Project Manager</span> with four years of experience in the tech industry.

                I design, build, and maintain user-centered SaaS products and am passionate about resource coordination, including streamlining work processes and enhancing team productivity.
              </div>
              <div className="flex justify-center pb-6">
                <img src={pmp} alt="PMP" className="pmp rounded-xl" />
              </div>
              <div className="pb-6">
                I'm a T-shaped professional who enjoys learning new technologies and adapting quickly in this rapidly evolving world.
              </div>
              <div className="pb-8">
                My strength lies in my superpower of empathy: <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-teal-600 hover:decoration-teal-500">I leverage keen observation to uncover hidden needs and translate them into actionable solutions.</span>
              </div>
              <div className="pb-6">
                My experience and personal traits have shaped my capabilities in
                <ul className="list-disc font-semibold ml-5 mt-2">
                  <li>Product Development & Management</li>
                  <li>Project Management</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>Process Optimization</li>
                  <li>Relationship Management</li>
                </ul>
              </div>
          </div>
        </div>
      </motion.section>

      {/* Skill Sets */}
      <motion.section className="code-snippet-container mt-8 md:mt-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}>
        <div className="code-display">
          <SyntaxHighlighter
            language="typescript"
            customStyle={{
              margin: 0,
              padding: "2rem",
              height: "100%",
              borderRadius: "20px",
              background: "rgba(6, 9, 13, 0.8)",
              backdropFilter: "blur(10px)",
              marginBottom: 50,
            }}
            style={vscDarkPlus}
          >
            {`My Skill Sets = {

  Programming : {
    languages: ["JavaScript", "Python", "SQL", "R"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "FastAPI", "pytest"],
    libraries: ["Pandas", "NumPy"],
    tools: ["Git", "Postman", "Node.js", "PostgreSQL", "Supabase","Docker", "ArcGIS Pro"]
  },

  Project Management: {
    methodologies: ["Agile", "Scrum", "Hybrid", "Lean Six Sigma"],
    skills: ["Data Analysis & Visualization","Roadmap Planning", "Stakeholder Engagement", "Root Cause Analysis"],
    tools: ["Jira", "Confluence", "Notion", "Microsoft 365", "Google Workspace", "Tableau"]
  },

  Soft Skills: ["Critical Thinking", "Problem-Solving", "Communication", "Adaptability", "Teamwork"]

}
`}
          </SyntaxHighlighter>
        </div>
      </motion.section>

    </motion.div>
  );
};
