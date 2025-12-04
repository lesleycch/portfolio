import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import profilePhoto from "../assets/image/profile_pic.png";



const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (

      <div className="hero flex flex-col items-center">
      <section className="hero-container flex justify-around flex-wrap mt-20 md:mt-30">
        {/* Hero Image */}
        <div className="self-center mx-12 md:mx-18 lg:mx-20">
        <div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={profilePhoto}
            alt="Lesley Chang"
            className="hero-image"
          />
          
        </div>

        {/* Social Link */}
        <div className="social-links place-self-center" variants={staggerContainer}>
            <a href="https://www.linkedin.com/in/leschang/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </a>
        </div>
        </div>
        {/* Intro */}
        <div className="mx-12 md:mx-18 lg:mx-20 mt-8 md:mt-6">
        <div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >

          <div className="hero-description" variants={fadeInUp}>
              <p className="pb-6">
                Hi 👋🏻  My name is Lesley Chang. I'm a seasoned <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-cyan-600 hover:decoration-cyan-500">software developer</span> and data-driven <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-cyan-600 hover:decoration-cyan-500">PMP®-Certified Project Manager</span> with four years of experience in the tech industry.
              
                I design user-centered SaaS products and am passionate about resource coordination, including streamlining work processes and enhancing team productivity.
              </p>
              <p className="pb-6">
                I'm a T-shaped professional who enjoys learning new technologies and adapting quickly in this rapidly evolving world.
              </p>
              <p className="pb-6">
                My strength lies in my superpower of empathy: <span className="font-semibold underline decoration-wavy decoration-2 underline-offset-4 decoration-teal-600 hover:decoration-teal-500">I leverage keen observation to uncover hidden needs and translate them into actionable solutions.</span>
              </p>

              <p className="pb-6">
                My experience and personal traits have shaped my capabilities in 
                <ul class="list-disc font-semibold ml-5 mt-2">
                  <li>Product Development & Management</li>
                  <li>Project Management</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>Process Optimization</li>
                  <li>Relationship Management</li>
                </ul>
              </p>
            
          </div>

        </div>
        </div>
      </section>
      {/* Skill Sets */}
      <section className="code-snippet-container px-10 md:px-18 lg:px-30 mt-8 md:mt-12">
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
      </section>
      
    </div>
  );
};
