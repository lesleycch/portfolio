import { Link } from "react-router-dom";
import PMDashboard from "../assets/images/projects/PM_dashboard.png";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const projects = [
  {
    title: "PM Dashboard Reporting",
    description:
      "Built an interactive Tableau dashboard that transforms raw project data into a clear, actionable decision-making tool, delivering rapid situational insights and facilitating team discussion and decision quality.",
    image: PMDashboard,
    tech: ["Tableau", "Dashboard Design", "Project Management"],
    link: "/projects/PM-dashboard-reporting"
  },
];

export default function Projects() {
  return (
    <section className="px-10 md:px-16 pt-6">
      {/* Breadcrumbs */}
      <div className="text-2xl font-bold mb-10">
        <Breadcrumbs />
      </div>

      {/* Page Title */}
      <div className="text-2xl font-semibold mb-10">
        Data Analytics and Visualization 
      </div>
      
      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
      {projects.map((project, i) => (
        <Link key={i} to={project.link}>
        <div
          key={i}
          className="project-card w-full h-auto object-cover overflow-hidden scale-100 hover:scale-101 transition-transform duration-300 rounded-xl"
        >
     
          <div
            className="project-image"
            style={{ backgroundImage: `url('${project.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 260 }}
          />

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tech">
            {project.tech.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>
        </Link>
      ))}
      </div>


    </section>
  );
}
